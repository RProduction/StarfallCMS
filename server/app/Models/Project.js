'use strict'

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Model = use('Model');

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env');

class Project extends Model {
    static boot(){
        super.boot();
        this.addHook('beforeCreate', 'ProjectHook.beforeCreate');
        this.addHook('beforeDelete', 'ProjectHook.beforeDelete');
    }

    static get hidden(){
        return ['img_type'];
      }

    static get computed () {
        return ['img_url'];
    }

    getImgUrl ({ _id, img_type }) {
        return `${Env.get('APP_URL')}/img/${_id}.${img_type}`;
    }

    entities(){
        return this.hasMany('App/Models/Entity', '_id', 'project_id');
    }
}

module.exports = Project
