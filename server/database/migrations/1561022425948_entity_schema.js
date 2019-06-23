'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EntitySchema extends Schema {
  up () {
    this.create('entities', (table) => {
      table.increments()
      table.string('entity_name', 60).notNullable()
      table.integer('project_id').unsigned().references('id').inTable('projects').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('entities')
  }
}

module.exports = EntitySchema
