'use strict'
/** @typedef {import('@adonisjs/lucid/src/Lucid/Model')} Model*/
/** @typedef {typeof import('@adonisjs/lucid/src/Lucid/Model')} ModelType*/

/** @type {ModelType} */
const Entity = use('App/Models/Entity');

const fs = require('fs');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

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
    if(fs.existsSync(Helpers.publicPath(path))){
        fs.unlinkSync(Helpers.publicPath(path));
    }

    // delete files in project
    await modelInstance.files().delete();

    Logger.info(`delete all entities(${entities.length}) in project ${modelInstance.name}`);
}