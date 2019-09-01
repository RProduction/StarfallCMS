'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Entity extends Model {
    static boot(){
        super.boot();
        this.addHook('beforeDelete', 'EntityHook.beforeDelete');
    }

    project(){
        return this.belongsTo('App/Models/Project');
    }

    documents(){
        return this.hasMany('App/Models/Document');
    }
}

module.exports = Entity
