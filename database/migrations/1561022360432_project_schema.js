'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class ProjectSchema extends Schema {
  up () {
    Logger.info('Create projects table');
    this.create('projects', (table) => {
      table.bigIncrements();
      table.string('name', 50).notNullable().unique();
      table.string('public_key', 255).unique();
      table.string('img_type', 10);
      table.timestamps();
    })
  }

  down () {
    Logger.info('Drop projects table');
    this.drop('projects')
  }
}

module.exports = ProjectSchema
