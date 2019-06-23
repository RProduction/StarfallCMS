'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Entity = use('App/Models/Entity');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Project = use('App/Models/Project');

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
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // add new entity
    // only creator and manager can add new entity
    async add({request, response}){
        const {entity_name, project_name} = request.post();

        try{
            Logger.info(`create new entity ${entity_name}`);

            // check existing entity inside project
            const project = await Project.findByOrFail('project_name', project_name);
            let existing = await project.entities().where('entity_name', entity_name).fetch();
            existing = existing.toJSON();
            if(existing.length > 0) throw('Entity already exist inside project');
            
            // insert
            const entity = new Entity();
            entity.entity_name = entity_name;
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
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // delete existing project
    // only creator can delete existing project
    async delete({request, response}){
        const {entity_name, project_name} = request.post();

        try{
            Logger.info(`delete entity ${entity_name} in ${project_name}`);
            const project = await Project.findByOrFail('project_name', project_name);
            await Entity.query().where({
                project_id: project.id,
                entity_name: entity_name
            }).delete();
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
    // rename existing project
    // only creator can rename existing project
    async rename({request, response}){
        const {entity_name, new_name, project_name} = request.post();

        try{
            Logger.info(`rename entity ${entity_name} into ${new_name} in ${project_name}`);
            
            // check existing entity inside project
            const project = await Project.findByOrFail('project_name', project_name);
            const existing = await Database.table('entities').where({
                project_id: project.id,
                entity_name: new_name
            });
            if(existing.length > 0) throw('Entity already exist with new name');

            // rename
            const trx = await Database.beginTransaction();
            await trx.table('entities').where({
                project_id: project.id,
                entity_name: entity_name
            }).update('entity_name', new_name);
            await trx.commit();

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
