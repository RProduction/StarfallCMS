'use strict'

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Model = use('Model')

class Project extends Model {
    static boot(){
        super.boot();
        this.addHook('beforeCreate', 'ProjectHook.beforeCreate');
        this.addHook('beforeDelete', 'ProjectHook.beforeDelete');
    }

    entities(){
        return this.hasMany('App/Models/Entity', '_id', 'project_id');
    }
}

module.exports = Project
