'use strict'

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Model = use('Model');

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env');

class Project extends Model {
    static boot(){
        super.boot();
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

    tokens () {
        return this.hasMany('App/Models/Token', '_id', 'user_id');
    }
}

module.exports = Project
