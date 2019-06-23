'use strict'
/** @typedef {import('@adonisjs/lucid/src/Lucid/Model')} Model*/

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Project = use('App/Models/Project');

/** @type {import('@adonisjs/lucid/src/Database')} */
const Database = use('Database');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

const EntityHook = exports = module.exports = {}

/** @param {Model} modelInstance*/
// hook for creating new table when entity is created
EntityHook.afterCreate = async (modelInstance) => {
    try{
        const project = await Project.findOrFail(modelInstance.project_id);
        const tablename = project.project_name + modelInstance.entity_name;
        Logger.info(`create new table ${tablename}`);
        await Database.raw(`CREATE TABLE ${tablename} (id int)`);
    }
    catch(error){
        Logger.warning(error);
    }
}

/** @param {Model} modelInstance*/
// hook for rename table when entity is rename
EntityHook.afterUpdate = async (modelInstance) => {
    if(modelInstance.entity_name.isDirty){
        const project = await Project.findOrFail(modelInstance.project_id);
        const name = project.project_name + modelInstance.dirty.entity_name;
        const newname = project.project_name + modelInstance.entity_name;
        Logger.info(`rename table ${name} into ${newname}`);
        await Database.raw(`ALTER TABLE ${name} RENAME TO ${newname}`);
    }
}

/** @param {Model} modelInstance*/
// hook for delete table when entity is deleted
EntityHook.afterDelete = async (modelInstance) => {
    const project = await Project.findOrFail(modelInstance.project_id);
    const tablename = project.project_name + modelInstance.entity_name;
    Logger.info(`delete table ${tablename}`);
    await Database.raw(`DROP TABLE ${tablename}`);
}
