'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Entity extends Model {
    projects(){
        return this.hasOne('App/Models/Project');
    }
}

module.exports = Entity
