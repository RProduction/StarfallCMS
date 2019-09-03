'use strict'

const fs = require('fs-extra');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Project = use('App/Models/Project');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

const Drive = use('Drive');

const Helpers = use('Helpers');

/** @type {import('@adonisjs/websocket/src/Ws')} */
const Ws = use('Ws');
/** @type {import('@adonisjs/websocket/src/Channel')} */
const channel = Ws.getChannel('storage');

async function ProcessStorage(path, result){
    const list = await fs.readdir(path,{withFileTypes: true});

    for(const value of list){
        const currentPath = `${path}/${value.name}`;
        if(value.isDirectory()){
            result[value.name] = {};
            await ProcessStorage(currentPath, result[value.name]);
        }else{
            const stat = await fs.lstat(currentPath);
            result[value.name] = {
                name: value.name,
                size: stat.size,
                created: stat.ctime,
                modified: stat.mtime
            };
        }
    }
}

class StorageController {
    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // return list of all files and folders in Storage
    // data: name, size in byte, isFolder, last modified
    // receive: project(id)
    async index({response, params}){
        try{
            Logger.info(`fetch storage in project with id ${params.project}`);
            await Project.findOrFail(params.project);
        
            let result = {};
            await ProcessStorage(Helpers.tmpPath(`storage/${params.project}`), result);
            
            return response.json(result);
        }catch(err){
            Logger.warning(`fail to fetch storage in project with id ${params.project}`);
            return response.notFound(`project with id ${params.project} not found`);
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // upload files into path
    // receive: project(id), path(destination path), file[]
    async upload({request, response, params}){
        try{
            await Project.findOrFail(params.project);

            Logger.info(`Preparing data to upload`);

            // prepare data
            let body = {};
            let files = [];
            request.multipart.field((name, value) => body[name] = value);
            request.multipart.file('file[]', {}, file => files.push(file));
            await request.multipart.process();

            // put file into destination path
            let {path} = body;
            let filesData = [];
            Logger.info(`files ${files.length}`);
            for(const file of files){   
                const to = path 
                    ? `${params.project}/${file.clientName}` 
                    : `${params.project}/${path}/${file.clientName}`;
                
                Logger.info(`Put file to ${to}`);
                await Drive.put(to, file.stream);
                
                const stat = await fs.lstat(Helpers.tmpPath(`storage/${to}`));
                filesData.push({
                    name: file.clientName,
                    size: stat.size,
                    created: stat.ctime,
                    modified: stat.mtime
                });
            }

            Logger.info(`upload files into path ${path} in project ${params.project}`);

            // return list of uploaded file and path
            response.ok(`succeed uploading file in project ${params.project}`);
            
            const topic = channel.topic('storage');
            if(topic){
                topic.broadcast('upload', {
                    id: params.project,
                    path: path,
                    files: filesData
                });
            }
        }
        catch(error){
            Logger.warning('Fail to upload files');
            Logger.warning(error);
            return response.internalServerError('Fail to upload files');
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // Add folder into path
    // receive: project(id), path(with folder name)
    async folder({request, response, params}){
        const {path} = request.post();

        try{
            // make folder
            await Project.findOrFail(params.project);
            
            Logger.info(`Add new folder`);
            const to = `${params.project}/${path}`;
            if(await Drive.exists(to)) throw 'directory already exist';
            
            await fs.mkdir(
                Helpers.tmpPath(`storage/${to}`), 
                {recursive: true}
            );

            Logger.info(`Added folder with path ${path} in project ${params.project}`);

            // return folder path
            response.ok(`succeed adding folder in project ${params.project}`);
            
            const topic = channel.topic('storage');
            if(topic){
                topic.broadcast('folder', {
                    id: params.project,
                    path: path
                });
            }
        }
        catch(error){
            Logger.warning('Fail to add folder');
            Logger.warning(error);
            return response.internalServerError('Fail to add folder');
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // move files and folders into path
    // receive: project(id), from files and folders path(with name), to folder path
    async move({request, response, params}){
        const {targets, path} = request.post();

        try{
            // move folders and files to path
            await Project.findOrFail(params.project);

            Logger.info(`Move files and folders to path ${path} in project ${params.project}`);
            let moved = [];
            for(const target of targets){
                const from = `${params.project}/${target}`;

                const to = path 
                    ? `${params.project}/${path}/${target.split('/').pop()}`
                    : `${params.project}/${target.split('/').pop()}`;

                if(!await Drive.exists(to) && await Drive.exists(from)){
                    Logger.info(`Move ${target} to ${to}`);
                    await fs.move(
                        Helpers.tmpPath(`storage/${from}`), 
                        Helpers.tmpPath(`storage/${to}`)
                    );
                    moved.push(target);
                }
            }

            // return folder path
            response.ok(`succeed moving files and folders in project ${params.project}`);
            
            const topic = channel.topic('storage');
            if(topic){
                topic.broadcast('move', {
                    id: params.project,
                    path: path,
                    targets: moved
                });
            }
        }
        catch(error){
            Logger.warning('Fail to move files and folders');
            Logger.warning(error);
            return response.internalServerError('Fail to move files and folders');
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // rename file or folder
    // receive: project(id), path, name, new name
    async rename({request, response, params}){
        const {name, new_name, path} = request.post();
        const _name = path ? `${path}/${name}` : name;
        const _new_name = path ? `${path}/${new_name}` : new_name ;

        try{
            // move folders and files to path
            await Project.findOrFail(params.project);
            
            Logger.info(`Rename file or folder from ${name} to ${new_name} in project ${params.project}`);
            if(!await Drive.exists(`${params.project}/${_name}`)) throw 'File or folder not exists!';
            
            await fs.rename(
                Helpers.tmpPath(`storage/${params.project}/${_name}`), 
                Helpers.tmpPath(`storage/${params.project}/${_new_name}`)
            );

            // return folder path
            response.ok(`succeed renaming file or folder in project ${params.project}`);
            
            const topic = channel.topic('storage');
            if(topic){
                topic.broadcast('rename', {
                    id: params.project,
                    path: path,
                    name: name,
                    new_name: new_name
                });
            }
        }
        catch(error){
            Logger.warning('Fail to rename file or folder');
            Logger.warning(error);
            return response.internalServerError('Fail to rename file or folder');
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // delete files and folders
    // receive: project (id), deleted file or folder paths(with name)
    async delete({request, response, params}){
        const {paths} = request.post();

        try{
            // move folders and files to path
            await Project.findOrFail(params.project);
            
            Logger.info(`Delete files and folders in project ${params.project}`);
            for(const path of paths){
                await Drive.delete(`${params.project}/${path}`);
            }

            // return folder path
            response.ok(`succeed deleting files and folders in project ${params.project}`);
            
            const topic = channel.topic('storage');
            if(topic){
                topic.broadcast('delete', {
                    id: params.project,
                    paths: paths
                });
            }
        }
        catch(error){
            Logger.warning(`Fail to delete files and folders in project ${params.project}`);
            Logger.warning(error);
            return response.internalServerError(`Fail to delete files and folders`);
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // stream file
    // receive path query
    async stream({request, response, params}){
        const {path} = request.get();

        try{
            Logger.info(`stream file in project ${params.project} with path ${path}`);

            const targetPath = `${params.project}/${path}`;
            const stat = await fs.lstat(Helpers.tmpPath(`storage/${targetPath}`));
            if(stat.isDirectory()) throw 'Can only stream file';

            const stream = Drive.getStream(targetPath);
            response.implicitEnd = false;
            stream.pipe(response.response);
        }
        catch(error){
            Logger.warning('Fail to stream file');
            Logger.warning(error);
            return response.internalServerError('Fail to stream file');
        }
    }
}

module.exports = StorageController
