'use strict'

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Model = use('Model')

class Token extends Model {
    user () {
        return this.belongsTo('App/Models/Project', 'user_id', '_id');
    }
}

module.exports = Token
