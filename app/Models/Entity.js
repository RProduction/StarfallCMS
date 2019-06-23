'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Entity extends Model {
    static boot(){
        super.boot();
        this.addHook('afterCreate', 'EntityHook.afterCreate');
        this.addHook('afterUpdate', 'EntityHook.afterUpdate');
        this.addHook('afterDelete', 'EntityHook.afterDelete');
    }

    projects(){
        return this.belongsTo('App/Models/Project');
    }
}

module.exports = Entity
