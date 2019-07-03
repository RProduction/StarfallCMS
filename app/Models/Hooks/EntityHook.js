'use strict'
/** @typedef {import('@adonisjs/lucid/src/Lucid/Model')} Model*/

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Project = use('App/Models/Project');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

const EntityHook = exports = module.exports = {}

/** @param {Model} modelInstance*/
// hook for creating new table when entity is created
EntityHook.beforeCreate = async (modelInstance) => {
    try{
        const project = await Project.findOrFail(modelInstance.project_id);
        const projectname = project.name;
        const tablename = modelInstance.name;
        Logger.info(`create new table ${tablename} in database ${projectname}`);
    }
    catch(error){
        Logger.warning(error);
    }
}

/** @param {Model} modelInstance*/
// hook for rename table when entity is rename
EntityHook.beforeUpdate = async (modelInstance) => {
    if(modelInstance.dirty.entity_name){
        const project = await Project.findOrFail(modelInstance.project_id);
        const projectname = project.name;
        const name = modelInstance.$originalAttributes.name;
        const newname = modelInstance.name;
        Logger.info(`rename table ${name} into ${newname} in database ${projectname}`);
    }
}

/** @param {Model} modelInstance*/
// hook for delete table when entity is deleted
EntityHook.beforeDelete = async (modelInstance) => {
    const project = await Project.findOrFail(modelInstance.project_id);
    const projectname = project.name;
    const tablename = modelInstance.name;
    Logger.info(`delete table ${tablename} in database ${projectname}`);
}