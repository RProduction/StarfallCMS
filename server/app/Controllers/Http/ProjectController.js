'use strict'

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
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
        return response.json(
            await Project.with('entities').with('tokens', (builder)=>{
                builder.select(['user_id', 'token']).where('is_revoked', false);
            }).fetch()
        );
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

        try{
            Logger.info(`create new project ${name}`);
            
            const project = new Project();
            project.name = name;
            await project.save();

            // make the token
            const res = await auth.authenticator('api').generate(project);

            Logger.info(`${name}: ${res.token}`);
            response.ok('succeed create new project');
            
            const topic = channel.topic('project');
            if(topic){
                topic.broadcast('add', {
                    ...project.toObject(), 
                    public_key: res.token
                });
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
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    */
    // delete existing project
    // only creator can delete existing project
    async delete({response, params, auth}){
        const id = params.id;

        try{
            Logger.info(`delete project with id ${id}`);
            
            const project = await Project.findOrFail(id);

            // revoke tokens before deleting project
            await auth.authenticator('api').revokeTokensForUser(project, null, true);

            // delete project
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
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    */
    // rename existing project
    // only creator can rename existing project
    async rename({request, response, params, auth}){
        const id = params.id;
        const {name} = request.post();

        try{
            Logger.info(`rename project with id ${id} into ${name}`);
            
            const project = await Project.findOrFail(id);
            
            project.name = name;
            await project.save();

            // revoke tokens
            await auth.authenticator('api').revokeTokensForUser(project);
            const res = await auth.authenticator('api').generate(project);

            response.ok('succeed rename project');

            const topic = channel.topic('project');
            if(topic){
                topic.broadcast('rename', {
                    _id: project._id,
                    name: project.name,
                    updated_at: project.updated_at,
                    public_key: res.public_key
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
            
            const project = await Project.findOrFail(id);

            // process image
            await img.move(Helpers.publicPath('img'), {
                name: `${project._id}.${img.subtype}`,
                overwrite: true
            });

            if (!img.moved()) {
                throw img.errors();
            }

            project.img_type = img.subtype;
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
