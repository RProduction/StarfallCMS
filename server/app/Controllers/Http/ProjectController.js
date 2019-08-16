'use strict'

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Project = use('App/Models/Project');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');
/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env');

const Helpers = use('Helpers');

/** @type {import('@adonisjs/websocket/src/Ws')} */
const Ws = use('Ws');
/** @type {import('@adonisjs/websocket/src/Channel')} */
const channel = Ws.getChannel('project');

class ProjectController {
    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // get all projects data including name and public_key
    // and embed entities inside each project
    // can only be called from StarfallCMS only(must be login)
    async index({response}){
        return response.json(await Project.with('entities').fetch());
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // add new project
    // only creator can add new project
    async add({request, response}){
        const {name} = request.post();

        try{
            Logger.info(`create new project ${name}`);
            
            const project = new Project();
            project.name = name;
            project.img_url = '';
            await project.save();

            Logger.info(`${name}: ${project.public_key}`);
            response.ok('succeed create new project');
            
            const topic = channel.topic('project');
            if(topic){
                topic.broadcast('add', project);
            }
        }
        catch(error){
            Logger.warning('Fail to create new project');
            Logger.warning(error);
            return response.internalServerError('Fail to create new project');
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // delete existing project
    // only creator can delete existing project
    async delete({response, params}){
        const id = params.id;

        try{
            Logger.info(`delete project with id ${id}`);
            
            const project = await Project.findOrFail(id);
            await project.delete();
            response.ok('succeed deleting project');

            const topic = channel.topic('project');
            if(topic){
                topic.broadcast('delete', {
                    _id: project._id
                });
            }
        }
        catch(error){
            Logger.warning('Fail to delete project');
            Logger.warning(error);
            return response.internalServerError('Fail to delete project');
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // rename existing project
    // only creator can rename existing project
    async rename({request, response, params}){
        const id = params.id;
        const {name} = request.post();

        try{
            Logger.info(`rename project with id ${id} into ${name}`);
            
            const project = await Project.findOrFail(id);
            project.name = name;
            await project.save();

            response.ok('succeed rename project');

            const topic = channel.topic('project');
            if(topic){
                topic.broadcast('rename', {
                    _id: project._id,
                    name: project.name,
                    updated_at: project.updated_at
                });
            }
        }
        catch(error){
            Logger.warning('Fail to rename project');
            Logger.warning(error);
            return response.internalServerError('Fail to rename project');
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // change image for existing project
    // only creator can change image for existing project
    async img({request, response, params}){
        const id = params.id;
        const img = request.file('img', {
            types: ['image'],
            size: '10mb'
        });

        try{
            Logger.info(`change img for project with id ${id}`);
            // process image
            const path = `bin/${id}`;
            await img.move(Helpers.publicPath(path), {
                name: 'img',
                overwrite: true
            });

            if (!img.moved()) {
                throw files.errors();
            }

            // change img_url in database
            const project = await Project.findOrFail(id);
            project.img_url = `${Env.get('APP_URL')}/${path}/img`;
            await project.save();

            response.ok('succeed change img for project');

            const topic = channel.topic('project');
            if(topic){
                topic.broadcast('img', {
                    _id: project._id,
                    img_url: project.img_url,
                    updated_at: project.updated_at
                });
            }
        }
        catch(error){
            Logger.warning('Fail to change image for project');
            Logger.warning(error);
            return response.internalServerError('Fail to change image for project');
        }
    }
}

module.exports = ProjectController
