'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.bigIncrements();
      table.string('name', 50).notNullable().unique();
      table.string('public_key', 255).unique();
      table.string('img_type', 10);
      table.timestamps();
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
