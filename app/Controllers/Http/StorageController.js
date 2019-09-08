'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Project = use('App/Models/Project');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const File = use('App/Models/File');

const Stream = require('stream');
const getStream = require('get-stream');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

/** @type {import('@adonisjs/websocket/src/Ws')} */
const Ws = use('Ws');
/** @type {import('@adonisjs/websocket/src/Channel')} */
const channel = Ws.getChannel('storage');

class StorageController {
    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // return list of all files in Storage
    // receive: project(id)
    async index({response, params}){
        Logger.info(`fetch storage in project with id ${params.project}`);
        const project = await Project.findOrFail(params.project);

        let files;
        try{
            files = await project.files().fetch();
        }catch(err){
            Logger.warning(`fail to fetch files in project with id ${params.project}`);
            return response.internalServerError(`fail to fetch files in project with id ${params.project}`);
        }

        return response.json(files);
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // upload files
    // receive: project(id), file[]
    async upload({request, response, params}){
        const project = await Project.findOrFail(params.project);

        let files = [];
        try{
            Logger.info('Preparing data to upload');

            // process data
            request.multipart.file('file[]', {}, async file => {
                // get buffer from stream
                const filebuffer = await getStream.buffer(file.stream);
                
                // put file into database
                const newfile = new File();
                newfile.name = file.clientName;
                newfile.type = `${file.type}/${file.subtype}`;
                newfile.file = filebuffer;
                newfile.size = filebuffer.byteLength;
                await project.files().save(newfile);

                Logger.info(`file ${newfile.name}, size : ${newfile.size}`);
                files.push(newfile);
            });

            Logger.info(`upload files in project ${params.project}`);
            await request.multipart.process();
        }
        catch(error){
            Logger.warning('Fail to upload files');
            Logger.warning(error);
            return response.internalServerError('Fail to upload files');
        }
        
        const topic = channel.topic('storage');
        if(topic){
            topic.broadcast('upload', files);
        }

        return response.ok(`succeed uploading file in project ${params.project}`);
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // rename file
    // receive: file(id), name
    async rename({request, response, params}){
        const {name} = request.post();
        
        const file = await File.findOrFail(params.file);
        file.name = name;
        
        try{
            Logger.info(`Rename file from ${file.name} to ${name}`);
            await file.save();
        }
        catch(error){
            Logger.warning('Fail to rename file');
            Logger.warning(error);
            return response.internalServerError('Fail to rename file');
        }

        const topic = channel.topic('storage');
        if(topic){
            topic.broadcast('rename', {
                id: file.id,
                name: file.name,
                updated_at: file.updated_at
            });
        }

        return response.ok('succeed renaming file');
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // toggle public in file
    // receive: file(id)
    async public({response, params}){
        const file = await File.findOrFail(params.file);
        Logger.info(`Toggle file isPublic from ${file.isPublic} to ${!file.isPublic}`);
        file.isPublic = !file.isPublic;

        try{
            await file.save();    
        }
        catch(error){
            Logger.warning('Fail to toggle file isPublic');
            Logger.warning(error);
            return response.internalServerError('Fail to toggle file isPublic');
        }

        const topic = channel.topic('storage');
        if(topic){
            topic.broadcast('public', {
                id: file.id,
                isPublic: file.isPublic,
                updated_at: file.updated_at
            });
        }
        
        return response.ok('succeed toggling file isPublic');
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // delete files
    // receive: ids[]
    async delete({request, response}){
        const {ids} = request.post();

        Logger.info('Delete files');
        try{
            await File.query().whereIn('id', ids).delete();
        }
        catch(error){
            Logger.warning('Fail to delete files');
            Logger.warning(error);
            return response.internalServerError('Fail to delete files');
        }

        const topic = channel.topic('storage');
        if(topic){
            topic.broadcast('delete', {ids: ids});
        }

        return response.ok('succeed deleting files');
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    * * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    */
    // stream file
    // receive file(name)
    async stream({response, auth, params}){
        Logger.info(`stream file ${params.file}`);
        const project = await Project.findByOrFail('name', params.project);
        const file = await File.findByOrFail({
            'name': params.file,
            'project_id': project.id
        });

        // check session auth if file is not public
        if(!file.isPublic){
            await auth.check();
        }

        try{
            // convert file into stream and stream file
            const filestream = new Stream.PassThrough();
            filestream.end(file.file);

            response.implicitEnd = false;
            response.header('content-disposition', 'inline');
            response.header('filename', file.name);
            response.header('content-type', file.type);
            response.header('content-length', file.size);
            filestream.pipe(response.response);
        }
        catch(error){
            Logger.warning('Fail to stream file');
            Logger.warning(error);
            return response.internalServerError('Fail to stream file');
        }
    }
}

module.exports = StorageController
