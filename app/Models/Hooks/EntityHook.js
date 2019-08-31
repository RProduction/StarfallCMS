'use strict'
/** @typedef {import('lucid-mongo/src/LucidMongo/Model')} Model*/

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Document = use('App/Models/Document');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

const EntityHook = exports = module.exports = {}

/** @param {Model} modelInstance*/
// hook for delete table when entity is deleted
EntityHook.beforeDelete = async (modelInstance) => {
    await Document.where({entity_id: modelInstance._id}).delete();
    Logger.info(`delete all documents in entity ${modelInstance.name}`);
}