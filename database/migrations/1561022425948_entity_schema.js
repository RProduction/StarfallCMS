'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EntitySchema extends Schema {
  up () {
    this.create('entities', (table) => {
      table.bigIncrements();
      table.string('name', 50).notNullable();
      table.bigInteger('project_id').notNullable().references('projects.id');
      table.timestamps();
    })
  }

  down () {
    this.drop('entities')
  }
}

module.exports = EntitySchema
