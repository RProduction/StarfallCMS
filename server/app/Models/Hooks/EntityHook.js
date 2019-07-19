'use strict'
/** @typedef {import('lucid-mongo/src/LucidMongo/Model')} Model*/

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Document = use('App/Models/Document');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

const EntityHook = exports = module.exports = {}

// generate default query object from object of type
function GenerateDefaultFromType(type, defaultValue){
    Object.entries(type).forEach(([key, value])=>{
        // check type and assign
        if(value === 'integer'){
            defaultValue[key] = 0;
        }
        else if(value === 'float'){
            defaultValue[key] = 0;
        }
        else if(value === 'string'){
            defaultValue[key] = '';
        }
        else if(value === 'boolean'){
            defaultValue[key] = false;
        }
        else if(value.constructor === Object){
            defaultValue[key] = {};

            // traverse object
            GenerateDefaultFromType(type[key], defaultValue[key]);
        }
        else if(value.constructor === Array){    
            defaultValue[key] = [];
        }
    });
}

function TraverseArray(arr, defaultValue){
    Object.entries(type).forEach(([key, value])=>{
        // check type and assign
        if(value === 'integer'){
            defaultValue[key] = 0;
        }
        else if(value === 'float'){
            defaultValue[key] = 0;
        }
        else if(value === 'string'){
            defaultValue[key] = '';
        }
        else if(value === 'boolean'){
            defaultValue[key] = false;
        }
        else if(value.constructor === Object){
            defaultValue[key] = {};

            // traverse object
            GenerateDefaultFromType(type[key], defaultValue[key]);
        }
        else if(value.constructor == Array){    
            defaultValue[key] = [];
        }
    });
}

// compare schema between old and new schema
// return field update query
function CompareSchema(oldSchema, newSchema, query){
    Object.entries(newSchema).forEach(([key, value])=>{
        let defaultObj = {};

        // check if field in newSchema exist or not in old
        // if not exist then add query set
        // if exist then compare type 
        if(!oldSchema[key]){
            // check type and assign
            if(value === 'integer'){
                query.$set[key] = 0;
            }
            else if(value === 'float'){
                query.$set[key] = 0;
            }
            else if(value === 'string'){
                query.$set[key] = '';
            }
            else if(value === 'boolean'){
                query.$set[key] = false;
            }
            else if(value.constructor === Object){
                GenerateDefaultFromType(value, defaultObj);
                query.$set[key] = defaultObj;
            }
            else if(value.constructor == Array){    
                query.$set[key] = [];
            }
        }else if(value !== oldSchema[key]){
            // check type and assign
            if(value === 'integer'){
                query.$set[key] = 0;
            }
            else if(value === 'float'){
                query.$set[key] = 0;
            }
            else if(value === 'string'){
                query.$set[key] = '';
            }
            else if(value === 'boolean'){
                query.$set[key] = false;
            }
            else if(value.constructor === Object){
                GenerateDefaultFromType(value, defaultObj);
                query.$set[key] = defaultObj;
            }
            else if(value.constructor === Array){    
                query.$set[key] = [];
            }
        }else if(value.constructor === Object){
            // if same but object then traverse
            CompareSchema(oldSchema[key], newSchema[key], query);
        }else if(value.constructor === Array){

        }
    });

    Object.entries(oldSchema).forEach(([key, value])=>{
        // check if field in oldSchema exist or not in new
        // if not exist then add query unset
        if(!newSchema[key]){
            query.$unset[key] = 1;
        }
    });
}

/** @param {Model} modelInstance*/
// hook for update document.data key and value after schema change
EntityHook.beforeUpdate = async (modelInstance) => {
    if(modelInstance.dirty.schema){
        let query = {$set: {}, $unset: {}};
        CompareSchema(
            modelInstance.$originalAttributes.schema, 
            modelInstance.schema, 
            query
        );
        await Document.query().update({}, query);
    }
}

/** @param {Model} modelInstance*/
// hook for delete table when entity is deleted
EntityHook.beforeDelete = async (modelInstance) => {
    await Document.where({entity_id: modelInstance._id}).delete();
    Logger.info(`delete all documents in entity ${modelInstance.name}`);
}