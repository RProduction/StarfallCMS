'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EntitySchema extends Schema {
  up () {
    this.create('entities', (table) => {
      table.increments()
      table.string('entity_name', 60).notNullable().unique()
      table.string('project_ref', 60).notNullable().references('project_name').inTable('projects')
      table.timestamps()
    })
  }

  down () {
    this.drop('entities')
  }
}

module.exports = EntitySchema
