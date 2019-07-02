'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Entity = use('App/Models/Entity');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Project = use('App/Models/Project');

/** @type {import('@adonisjs/lucid/src/Database')} */
const Database = use('Database');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

const Ws = use('Ws');

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

            const subscription = Ws.getChannel('entity').topic('entity');
            if(Boolean(subscription)){
                subscription.broadcast('add', {
                    project_id: project.id,
                    project_name: project.project_name,
                    ...entity.toJSON()
                });
            }    
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
            
            // find project
            let project = await Project.findOrFail(entity.project_id);

            await entity.delete();
            response.ok('succeed delete');

            const subscription = Ws.getChannel('entity').topic('entity');
            if(Boolean(subscription)){
                subscription.broadcast('delete', {
                    project_id: project.id,
                    project_name: project.project_name,
                    id: entity.id, 
                    entity_name: entity.entity_name
                });
            }    
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
            const oldname = entity.entity_name;
            entity.entity_name = name;
            await entity.save();

            response.ok('succeed rename entity');

            const subscription = Ws.getChannel('entity').topic('entity');
            if(Boolean(subscription)){
                subscription.broadcast('rename', {
                    project_id: project.id,
                    project_name: project.project_name,
                    old_name: oldname,
                    ...entity.toJSON()
                });
            }    
        }
        catch(error){
            Logger.warning('Fail to rename entity');
            Logger.warning(error);
            response.internalServerError('Fail to rename entity');
            return;
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // get datatype of table created
    // can only be called from StarfallCMS only(must be login)
    async datatype({request, response}){
        const {entity_name, project_name} = request.post();

        try{
            Logger.info(`get datatype of table ${entity_name} in ${project_name}`);
            
            const project = await Project.findByOrFail('project_name', project_name);
            const entity = await Entity.findOrFail(project.id);
            response.json(JSON.parse(entity.columns));
        }
        catch(error){
            Logger.warning('Fail to get datatype');
            Logger.warning(error);
            response.internalServerError('Fail to get datatype');
            return;
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // insert data into table created
    // only creator and manager can insert existing table
    async insert({request, response}){
        const {entity_name, data, project_name} = request.post();

        try{
            Logger.info(`insert into table ${entity_name} in ${project_name}`);
            
            const tablename = project_name + entity_name;
            let query = `INSERT INTO ${tablename} (`;
            const keys = Object.keys(data);
            for(let i in keys){
                if(i === keys.length-1){
                    query += `${keys[i]}) VALUES (`;
                }else{
                    query += `${keys[i]}, `;
                }
            }
            for(let i in keys){
                if(i === keys.length-1){
                    query += `${data[keys[i]]})`;
                }else{
                    query += `${data[keys[i]]}, `;
                }
            }
            await Database.raw(query);

            response.ok('succeed insert into table');
        }
        catch(error){
            Logger.warning('Fail to insert into table');
            Logger.warning(error);
            response.internalServerError('Fail to insert into table');
            return;
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // modify table column created
    // only creator and manager can modify existing table
    async modify({request, response}){
        const {entity_name, columns, project_name} = request.post();

        try{
            Logger.info(`modify table ${entity_name} in ${project_name}`);
            
            // check existing entity inside project
            const project = await Project.findByOrFail('project_name', project_name);

            // modify
            let rawEntity = await project.entities().where('entity_name', entity_name).fetch();
            rawEntity = rawEntity.toJSON();
            const entity = await Entity.findOrFail(rawEntity[0].id);
            entity.columns = JSON.stringify(columns);
            await entity.save();

            response.ok('succeed modify table');
        }
        catch(error){
            Logger.warning('Fail to modify table');
            Logger.warning(error);
            response.internalServerError('Fail to modify table');
            return;
        }
    }
}

module.exports = EntityController
