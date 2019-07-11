'use strict'

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Model = use('Model')

class Document extends Model {
    entities(){
        return this.belongsTo('App/Models/Entity', 'entity_id', '_id');
    }
}

module.exports = Document
