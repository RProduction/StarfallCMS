'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class File extends Model {
    static get hidden(){
        return ['file'];
    }

    project(){
        return this.belongsTo('App/Models/Project');
    }
}

module.exports = File
