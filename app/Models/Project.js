'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
    static boot(){
        super.boot();
        this.addHook('beforeCreate', 'ProjectHook.beforeCreate');
    }

    entities(){
        return this.hasMany('App/Models/Entity');
    }
}

module.exports = Project
