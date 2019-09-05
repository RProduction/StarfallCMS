'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Entity = use('App/Models/Entity');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Project = use('App/Models/Project');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

/** @type {import('@adonisjs/websocket/src/Ws')} */
const Ws = use('Ws');
/** @type {import('@adonisjs/websocket/src/Channel')} */
const channel = Ws.getChannel('entity');

class EntityController {
    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // add new entity
    // only creator and manager can add new entity
    async add({request, response, params}){
        const {name} = request.post();

        try{
            Logger.info(`create new entity ${name}`);

            // check existing entity inside project
            const project = await Project.findOrFail(params.project);

            // insert
            const entity = new Entity();
            entity.name = name;
            await project.entities().save(entity);

            response.ok('succeed create new entity');

            const topic = channel.topic('entity');
            if(topic){
                topic.broadcast('add', {
                    project_id: project.id,
                    ...entity.toObject()
                });
            }    
        }
        catch(error){
            Logger.warning('Fail to create new entity');
            Logger.warning(error);
            return response.internalServerError('Fail to create new entity');
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // delete existing entity
    // only creator and manager can delete existing entity
    async delete({response, params}){
        try{
            Logger.info(`delete entity with id ${params.entity}`);
            
            // find and delete entity model
            const entity = await Entity.findOrFail(params.entity);

            await entity.delete();
            response.ok('succeed deleting entity');

            const topic = channel.topic('entity');
            if(topic){
                topic.broadcast('delete', {
                    id: entity.id
                });
            }    
        }
        catch(error){
            Logger.warning('Fail to delete entity');
            Logger.warning(error);
            return response.internalServerError('Fail to delete entity');
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // rename existing entity
    // only creator and manager can rename existing entity
    async rename({request, response, params}){
        const {name} = request.post();

        try{
            Logger.info(`rename entity with id ${params.entity} into ${name}`);
            
            // rename
            const entity = await Entity.findOrFail(params.entity);
            entity.name = name;
            await entity.save();

            response.ok('succeed rename entity');

            const topic = channel.topic('entity');
            if(topic){
                topic.broadcast('rename', {
                    id: entity.id,
                    name: entity.name,
                    updated_at: entity.updated_at
                });
            }    
        }
        catch(error){
            Logger.warning('Fail to rename entity');
            Logger.warning(error);
            return response.internalServerError('Fail to rename entity');
        }
    }
}

module.exports = EntityController
