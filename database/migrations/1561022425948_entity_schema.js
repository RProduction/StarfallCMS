'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class EntitySchema extends Schema {
  up () {
    Logger.info('Create entities table');
    this.create('entities', (table) => {
      table.bigIncrements();
      table.string('name', 50).notNullable();
      table.bigInteger('project_id').notNullable().references('projects.id');
      table.unique(['project_id', 'name']);
      table.timestamps();
    })
  }

  down () {
    Logger.info('Drop entities table');
    this.drop('entities')
  }
}

module.exports = EntitySchema
