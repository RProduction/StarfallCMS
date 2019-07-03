'use strict'

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Model = use('Model')

class Entity extends Model {
    static boot(){
        super.boot();
        this.addHook('beforeCreate', 'EntityHook.beforeCreate');
        this.addHook('beforeUpdate', 'EntityHook.beforeUpdate');
        this.addHook('beforeDelete', 'EntityHook.beforeDelete');
    }

    project(){
        return this.belongsTo('App/Models/Project', 'project_id', '_id');
    }
}

module.exports = Entity
