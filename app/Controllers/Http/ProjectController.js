'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Project = use('App/Models/Project');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

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
        let data = await Project.query().with('entities').fetch();

        return response.json(data);
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    */
    // add new project
    // only creator can add new project
    async add({request, response, auth}){
        const {name} = request.post();

        Logger.info(`create new project ${name}`);
        const project = new Project();
        project.name = name;

        try{    
            await project.save();
        }
        catch(error){
            Logger.warning('Fail to create new project');
            Logger.warning(error);
            return response.internalServerError('Fail to create new project');
        }

        // make the token
        let res;
        try{    
            res = await auth.authenticator('api').generate(project);
            project.public_key = res.token;
            await project.save();
        }
        catch(error){
            await auth.authenticator('api').revokeTokensForUser(project, null, true);
            await project.delete();

            Logger.warning('Fail to generate api token');
            Logger.warning(error);
            return response.internalServerError('Fail to generate api token');
        }

        const topic = channel.topic('project');
        if(topic){
            topic.broadcast('add', project);
        }

        Logger.info(`${name}: ${res.token}`);
        return response.ok('succeed creating new project');
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    */
    // delete existing project
    // only creator can delete existing project
    async delete({response, params, auth}){
        Logger.info(`delete project with id ${params.project}`);
        const project = await Project.findOrFail(params.project);
        
        try{
            // revoke tokens then delete project
            await auth.authenticator('api').revokeTokensForUser(project, null, true);
            await project.delete();
        }
        catch(error){
            Logger.warning('Fail to delete project');
            Logger.warning(error);
            return response.internalServerError('Fail to delete project');
        }

        const topic = channel.topic('project');
        if(topic){
            topic.broadcast('delete', {
                id: project.id
            });
        }

        return response.ok('succeed deleting project');    
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    */
    // rename existing project
    // only creator can rename existing project
    async rename({request, response, params, auth}){
        const {name} = request.post();

        Logger.info(`rename project with id ${params.project} into ${name}`);
        const project = await Project.findOrFail(params.project);

        try{    
            // revoke tokens
            await auth.authenticator('api').revokeTokensForUser(project, null, true);
            const res = await auth.authenticator('api').generate(project);

            project.name = name;
            project.public_key = res.token;
            await project.save();
        }
        catch(error){
            Logger.warning('Fail to rename project');
            Logger.warning(error);
            return response.internalServerError('Fail to rename project');
        }

        const topic = channel.topic('project');
        if(topic){
            topic.broadcast('rename', {
                id: project.id,
                name: project.name,
                updated_at: project.updated_at,
                public_key: project.public_key
            });
        }

        return response.ok('succeed renaming project');
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // change image for existing project
    // only creator can change image for existing project
    async img({request, response, params}){
        const img = request.file('img', {
            types: ['image'],
            size: '10mb'
        });

        Logger.info(`change img for project with id ${params.project}`);    
        const project = await Project.findOrFail(params.project);

        try{
            // process image
            await img.move(Helpers.publicPath('img'), {
                name: `${project.id}.${img.subtype}`,
                overwrite: true
            });
            if (!img.moved()) {
                throw img.errors();
            }

            project.img_type = img.subtype;
            await project.save();
        }
        catch(error){
            Logger.warning('Fail to change image for project');
            Logger.warning(error);
            return response.internalServerError('Fail to change image for project');
        }

        const topic = channel.topic('project');
        if(topic){
            topic.broadcast('img', {
                id: project.id,
                img_url: project.img_url,
                updated_at: project.updated_at
            });
        }
        return response.ok('succeed changing project image thumbnail');
    }
}

module.exports = ProjectController
