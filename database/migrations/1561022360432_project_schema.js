'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.bigIncrements();
      table.string('name').notNullable().unique();
      table.string('public_key').unique();
      table.string('img_type');
      table.timestamps();
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
