'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Document extends Model {
    getData(data){
        if(data.constructor === String)
            return JSON.parse(data);
        return data;
    }

    setData(data){
        return JSON.stringify(data);
    }

    entity(){
        return this.belongsTo('App/Models/Entity');
    }
}

module.exports = Document
