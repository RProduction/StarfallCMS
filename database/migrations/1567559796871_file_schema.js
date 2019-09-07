'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class FileSchema extends Schema {
  up () {
    Logger.info('Create files table');
    this.create('files', (table) => {
      table.bigIncrements();
      table.string('name', 255).notNullable();
      table.string('type', 20);
      table.integer('size');
      table.binary('file').notNullable();
      table.bigInteger('project_id').notNullable().references('projects.id');
      table.boolean('isPublic').notNullable().defaultTo(false);
      table.unique(['project_id', 'name']);
      table.timestamps();
    })
  }

  down () {
    Logger.info('Drop files table');
    this.drop('files')
  }
}

module.exports = FileSchema
