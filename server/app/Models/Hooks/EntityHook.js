'use strict'
/** @typedef {import('lucid-mongo/src/LucidMongo/Model')} Model*/

/** @type {import('lucid-mongo/src/Database')} */
const Database = use('Database');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

const EntityHook = exports = module.exports = {}

/** @param {Model} modelInstance*/
// hook for creating new table when entity is created
EntityHook.afterCreate = async (modelInstance) => {
    try{
        const id = modelInstance._id.toString();

        // check if old collection still exists then delete it if exists
        await Database.schema.dropCollectionIfExists(id);
        await Database.schema.createCollection(id, (collection)=>{
            collection.increments();
            collection.timestamps();
        });

        Logger.info(`create new table ${id} from entity ${modelInstance.name}`);
    }
    catch(error){
        Logger.warning(error);
    }
}

/** @param {Model} modelInstance*/
// hook for delete table when entity is deleted
EntityHook.beforeDelete = async (modelInstance) => {
    const id = modelInstance._id.toString();

    await Database.schema.dropCollectionIfExists(id);
    
    Logger.info(`delete table ${id} from entity ${modelInstance.name}`);
}