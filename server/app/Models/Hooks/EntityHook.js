'use strict'
/** @typedef {import('@adonisjs/lucid/src/Lucid/Model')} Model*/

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Document = use('App/Models/Document');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

const EntityHook = exports = module.exports = {}

/** @param {Model} modelInstance*/
// hook for delete table when entity is deleted
EntityHook.beforeDelete = async (modelInstance) => {
    await Document.query().where('entity_id', modelInstance.id).delete();
    Logger.info(`delete all documents in entity ${modelInstance.name}`);
}