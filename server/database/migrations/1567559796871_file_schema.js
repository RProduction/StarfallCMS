'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FileSchema extends Schema {
  up () {
    this.create('files', (table) => {
      table.bigIncrements();
      table.string('name').notNullable();
      table.string('extension');
      table.integer('size');
      table.binary('file').notNullable();
      table.bigInteger('project_id').notNullable().references('projects.id');
      table.boolean('isPublic').notNullable().defaultTo(false);
      table.unique(['project_id', 'name']);
      table.timestamps();
    })
  }

  down () {
    this.drop('files')
  }
}

module.exports = FileSchema
