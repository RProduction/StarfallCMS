'use strict'
/** @typedef {import('lucid-mongo/src/LucidMongo/Model')} Model*/

const crypto = require('crypto');

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Entity = use('App/Models/Entity');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

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

    Logger.info(`delete all entities(${entities.length}) in project ${modelInstance.name}`);
}