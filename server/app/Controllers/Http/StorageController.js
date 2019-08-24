'use strict'

const fs = require('fs-extra');

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
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
    // receive: id(project id)
    async index({response, params}){
        const id = params.id;

        try{
            Logger.info(`fetch storage in project with id ${id}`);
            await Project.findOrFail(id);
        
            let result = {};
            await ProcessStorage(Helpers.tmpPath(`storage/${id}`), result);
            
            return response.json(result);
        }catch(err){
            Logger.warning(`fail to fetch storage in project with id ${id}`);
            return response.notFound(`project with id ${id} not found`);
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // upload files into path
    // receive: id(project id), path(destination path), file[]
    async upload({request, response, params}){
        const id = params.id;

        try{
            await Project.findOrFail(id);

            Logger.info(`Preparing data to upload`);

            // prepare data
            let body = {};
            let files = [];
            request.multipart.field((name, value) => body[name] = value);
            request.multipart.file('file[]', {}, file => files.push(file));
            await request.multipart.process();

            // put file into destination path
            let{path} = body;
            let files = [];
            for(const file of files){   
                const to = path 
                    ? `${id}/${file.clientName}` 
                    : `${id}/${path}/${file.clientName}`;

                await Drive.put(to, file.stream);
                
                const stat = await fs.lstat(Helpers.tmpPath(`storage/${to}`));
                files.push({
                    name: stat.name,
                    size: stat.size,
                    created: stat.ctime,
                    modified: stat.mtime
                });
            }

            Logger.info(`upload files into path ${path} in project ${id}`);

            // return list of uploaded file and path
            response.ok(`succeed uploading file in project ${id}`);
            
            const topic = channel.topic('storage');
            if(topic){
                topic.broadcast('upload', {
                    _id: id,
                    path: path,
                    files: files
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
    // receive: id(project id), path(with folder name)
    async folder({request, response, params}){
        const id = params.id;
        const {path} = request.post();

        try{
            // make folder
            await Project.findOrFail(id);
            
            Logger.info(`Add new folder`);
            const to = `${id}/${path}`;
            if(await Drive.exists(to)) throw 'directory already exist';
            
            await fs.mkdir(
                Helpers.tmpPath(`storage/${to}`), 
                {recursive: true}
            );

            Logger.info(`Added folder with path ${path} in project ${id}`);

            // return folder path
            response.ok(`succeed adding folder in project ${id}`);
            
            const topic = channel.topic('storage');
            if(topic){
                topic.broadcast('folder', {
                    _id: id,
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
    // receive: id(project id), from files and folders path(with name), to folder path
    async move({request, response, params}){
        const id = params.id;
        const {targets, path} = request.post();

        try{
            // move folders and files to path
            await Project.findOrFail(id);

            Logger.info(`Move files and folders to path ${path} in project ${id}`);
            let moved = [];
            for(const target of targets){
                const from = `${id}/${target}`;

                const to = path 
                    ? `${id}/${path}/${target.split('/').pop()}`
                    : `${id}/${target.split('/').pop()}`;

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
            response.ok(`succeed moving files and folders in project ${id}`);
            
            const topic = channel.topic('storage');
            if(topic){
                topic.broadcast('move', {
                    _id: id,
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
    // receive: id(project id), path, name, new name
    async rename({request, response, params}){
        const id = params.id;
        const {name, new_name, path} = request.post();
        const _name = path ? `${path}/${name}` : name;
        const _new_name = path ? `${path}/${new_name}` : new_name ;

        try{
            // move folders and files to path
            await Project.findOrFail(id);
            
            Logger.info(`Rename file or folder from ${name} to ${new_name} in project ${id}`);
            if(!await Drive.exists(`${id}/${_name}`)) throw 'File or folder not exists!';
            
            await fs.rename(
                Helpers.tmpPath(`storage/${id}/${_name}`), 
                Helpers.tmpPath(`storage/${id}/${_new_name}`)
            );

            // return folder path
            response.ok(`succeed renaming file or folder in project ${id}`);
            
            const topic = channel.topic('storage');
            if(topic){
                topic.broadcast('rename', {
                    _id: id,
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
    // receive: id(project id), deleted file or folder paths(with name)
    async delete({request, response, params}){
        const id = params.id;
        const {paths} = request.post();

        try{
            // move folders and files to path
            await Project.findOrFail(id);
            
            Logger.info(`Delete files and folders in project ${id}`);
            for(const path of paths){
                await Drive.delete(`${id}/${path}`);
            }

            // return folder path
            response.ok(`succeed deleting files and folders in project ${id}`);
            
            const topic = channel.topic('storage');
            if(topic){
                topic.broadcast('delete', {
                    _id: id,
                    paths: paths
                });
            }
        }
        catch(error){
            Logger.warning(`Fail to delete files and folders in project ${id}`);
            Logger.warning(error);
            return response.internalServerError(`Fail to delete files and folders`);
        }
    }
}

module.exports = StorageController
