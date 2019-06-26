'use strict'
/** @typedef {import('@adonisjs/lucid/src/Lucid/Model')} Model*/

const crypto = require('crypto');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Entity = use('App/Models/Entity');

/** @type {import('@adonisjs/lucid/src/Database')} */
const Database = use('Database');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

const ProjectHook = exports = module.exports = {}

/** @param {Model} modelInstance*/
ProjectHook.beforeCreate = async (modelInstance) => {
    modelInstance.public_key = crypto.randomBytes(30).toString('hex');
}

/** @param {Model} modelInstance*/
// hook for rename table when project is rename
ProjectHook.beforeUpdate = async (modelInstance) => {
    if(modelInstance.dirty.project_name){
        const name = modelInstance.$originalAttributes.project_name;
        const newname = modelInstance.project_name;
        Logger.info(`rename database ${name} into ${newname}`);
    }
}