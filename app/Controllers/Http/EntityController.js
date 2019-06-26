'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Entity = use('App/Models/Entity');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Project = use('App/Models/Project');

/** @type {import('@adonisjs/lucid/src/Database')} */
const Database = use('Database');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class EntityController {
    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // get all available entities
    // can only be called from StarfallCMS only(must be login)
    async index({response}){
        response.json(await Entity.all());
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // get all available entities
    // can only be called from StarfallCMS only(must be login)
    async entities({response, params}){
        const id = params.id;

        try{
            Logger.info(`Get all entities inside project with id ${id}`);

            // check project is exist or not
            const project = await Project.findOrFail(id);
            response.json(await project.entities().fetch());
            Logger.info('succeed fetching entities');
        }
        catch(error){
            Logger.warning('Fail to get all entities inside project');
            Logger.warning(error);
            response.internalServerError('Fail to get all entities inside project');
            return;
        }
    }
    
    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // add new entity
    // only creator and manager can add new entity
    async add({request, response, params}){
        const id = params.id;
        const {name} = request.post();

        try{
            Logger.info(`create new entity ${name}`);

            // check existing entity inside project
            const project = await Project.findOrFail(id);
            let existing = await project.entities().where('entity_name', name).fetch();
            existing = existing.toJSON();
            if(existing.length > 0) throw('Entity already exist inside project');
            
            // insert
            const entity = new Entity();
            entity.entity_name = name;
            await project.entities().save(entity);

            response.ok('succeed create new entity');
        }
        catch(error){
            Logger.warning('Fail to create new entity');
            Logger.warning(error);
            response.internalServerError('Fail to create new entity');
            return;
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // delete existing entity
    // only creator and manager can delete existing entity
    async delete({response, params}){
        const id = params.id;

        try{
            Logger.info(`delete entity with id ${id}`);

            // find and delete entity model
            const entity = await Entity.findOrFail(id);
            await entity.delete();
            response.ok('succeed delete');
        }
        catch(error){
            Logger.warning('Fail to delete entity');
            Logger.warning(error);
            response.internalServerError('Fail to delete entity');
            return;
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
        const id = params.id;
        const {name} = request.post();

        try{
            Logger.info(`rename entity with id ${id} into ${name}`);
            
            const entity = await Entity.findOrFail(id);

            // check existing entity inside project
            const project = await Project.findOrFail(entity.project_id);
            let existing = await project.entities().where('entity_name', name).fetch();
            existing = existing.toJSON();
            if(existing.length > 0) throw('Entity already exist with new name');

            // rename
            entity.entity_name = name;
            await entity.save();

            response.ok('succeed rename entity');
        }
        catch(error){
            Logger.warning('Fail to rename entity');
            Logger.warning(error);
            response.internalServerError('Fail to rename entity');
            return;
        }
    }
}

module.exports = EntityController
