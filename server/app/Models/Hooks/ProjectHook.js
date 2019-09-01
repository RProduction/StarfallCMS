'use strict'
/** @typedef {import('@adonisjs/lucid/src/Lucid/Model')} Model*/
/** @typedef {typeof import('@adonisjs/lucid/src/Lucid/Model')} ModelType*/

const fs = require('fs-extra');

/** @type {ModelType} */
const Entity = use('App/Models/Entity');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

const Drive = use('Drive');

const Helpers = use('Helpers');

const ProjectHook = exports = module.exports = {}

/** @param {Model} modelInstance*/
// hook for delete all entity inside project when project is deleted
ProjectHook.beforeDelete = async (modelInstance) => {
    let entities = await modelInstance.entities().fetch();
    entities = entities.toJSON();

    // delete entities related to project
    for(let entity of entities){
        const temp = await Entity.find(entity.id);
        if(temp) await temp.delete();
    }

    // delete project img if exist
    const path = `img/${modelInstance.id}.${modelInstance.img_type}`;
    if(await fs.exists(Helpers.publicPath(path))){
        await fs.unlink(path);
    }

    // delete project files folder if exist
    if(await Drive.exists(`${modelInstance.id}`))
        await Drive.delete(`${modelInstance.id}`);

    Logger.info(`delete all entities(${entities.length}) in project ${modelInstance.name}`);
}