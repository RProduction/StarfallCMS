'use strict'
/** @typedef {import('lucid-mongo/src/LucidMongo/Model')} Model*/

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Document = use('App/Models/Document');

/** @type {typeof import('lucid-mongo/src/LucidMongo/Database')} */
const Database = use('Database');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

const Drive = use('Drive');

const {diff} = require('deep-diff');

const EntityHook = exports = module.exports = {}

/** @param {Model} modelInstance*/
// hook for update document.data key and value after schema change
EntityHook.beforeUpdate = async (modelInstance) => {
    if(modelInstance.dirty.schema){
        let query = {$set: {}, $unset: {}};
        // get difference between schema with diff library
        const result = diff(
            modelInstance.$originalAttributes.schema, 
            modelInstance.schema,
            {
                normalize: (path, key, lhs, rhs)=>{
                    if(lhs === 'integer'){
                        lhs = 0;
                    }else if(lhs === 'float'){
                        lhs = 0;
                    }else if(lhs === 'string'){
                        lhs = '';
                    }else if(lhs === 'boolean'){
                        lhs = false;
                    }

                    if(rhs === 'integer'){
                        rhs = 0;
                    }else if(rhs === 'float'){
                        rhs = 0;
                    }else if(rhs === 'string'){
                        rhs = '';
                    }else if(rhs === 'boolean'){
                        rhs = false;
                    }

                    return [lhs, rhs];
                }
            }
        );

        // and process result of diff into query
        result.forEach(value => {
            let key = 'data.';
            value.path.forEach((path, index) => {
                if(index < value.path.length-1){
                    key = `${key}${path}.`;
                }else{
                    key = `${key}${path}`;
                }
            });

            // check if change in array or not
            if(value.kind === 'N' || value.kind === 'E'){
                // if new or edit property in object    
                query.$set[key] = value.rhs;
            }else if(value.kind === 'D'){
                // if delete property in object
                query.$unset[key] = '';
            }else if(value.item.kind === 'N'){

            }else if(value.item.kind === 'D'){

            }
        });
        
        if(Object.keys(query.$set).length === 0) delete query['$set'];
        if(Object.keys(query.$unset).length === 0) delete query['$unset'];
        
        const mquery = await Database.connect();
        const affected = await mquery.collection('documents').update(
            {entity_id: modelInstance._id}, query, {multi: true}
        );
        Logger.info(`modify all documents in entity ${modelInstance._id} (${affected})`);
    }
}

/** @param {Model} modelInstance*/
// hook for delete table when entity is deleted
EntityHook.beforeDelete = async (modelInstance) => {
    await Document.where({entity_id: modelInstance._id}).delete();
    
    // delete entity files folder if exist
    if(await Drive.exists(`${modelInstance.project_id}/${modelInstance._id}`))
        await Drive.delete(`${modelInstance.project_id}/${modelInstance._id}`);

    Logger.info(`delete all documents in entity ${modelInstance.name}`);
}