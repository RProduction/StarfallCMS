'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class DocumentSchema extends Schema {
  up () {
    Logger.info('Create documents table');
    this.create('documents', (table) => {
      table.bigIncrements();
      table.bigInteger('entity_id').notNullable().references('entities.id');
      table.json('data').defaultTo('{}');
      table.timestamps();
    })
  }

  down () {
    Logger.info('Drop documents table');
    this.drop('documents')
  }
}

module.exports = DocumentSchema
