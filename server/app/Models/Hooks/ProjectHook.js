'use strict'
/** @typedef {import('lucid-mongo/src/LucidMongo/Model')} Model*/
/** @typedef {typeof import('lucid-mongo/src/LucidMongo/Model')} ModelType*/

const fs = require('fs');
const crypto = require('crypto');

/** @type {ModelType} */
const Entity = use('App/Models/Entity');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

const Drive = use('Drive');

const Helpers = use('Helpers');

const ProjectHook = exports = module.exports = {}

/** @param {Model} modelInstance*/
ProjectHook.beforeCreate = async (modelInstance) => {
    modelInstance.public_key = crypto.randomBytes(30).toString('hex');
}

/** @param {Model} modelInstance*/
// hook for delete all entity inside project when project is deleted
ProjectHook.beforeDelete = async (modelInstance) => {
    let entities = await modelInstance.entities().fetch();
    entities = entities.toJSON();

    // delete entities related to project
    for(let entity of entities){
        const temp = await Entity.find(entity._id);
        if(temp) await temp.delete();
    }

    // delete project img if exist
    const path = `img/${modelInstance._id}.${modelInstance.img_type}`;
    if(fs.existsSync(Helpers.publicPath(path))){
        fs.unlinkSync(path);
    }

    // delete project files folder if exist
    if(await Drive.exists(`${modelInstance._id}`))
        await Drive.delete(`${modelInstance._id}`);

    Logger.info(`delete all entities(${entities.length}) in project ${modelInstance.name}`);
}