'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
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

    getImgUrl ({ id, img_type }) {
        return `${Env.get('APP_URL')}/img/${id}.${img_type}`;
    }

    entities(){
        return this.hasMany('App/Models/Entity');
    }

    files(){
        return this.hasMany('App/Models/File');
    }

    tokens () {
        return this.hasMany('App/Models/Token', 'id', 'user_id');
    }
}

module.exports = Project
