'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Entity extends Model {
    static boot(){
        super.boot();
        this.addHook('beforeCreate', 'EntityHook.beforeCreate');
        this.addHook('beforeUpdate', 'EntityHook.beforeUpdate');
        this.addHook('beforeDelete', 'EntityHook.beforeDelete');
    }

    project(){
        return this.belongsTo('App/Models/Project');
    }
}

module.exports = Entity
