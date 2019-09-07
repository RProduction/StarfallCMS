'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DocumentSchema extends Schema {
  up () {
    this.create('documents', (table) => {
      table.bigIncrements();
      table.bigInteger('entity_id').notNullable().references('entities.id');
      table.json('data').defaultTo('{}');
      table.timestamps();
    })
  }

  down () {
    this.drop('documents')
  }
}

module.exports = DocumentSchema
