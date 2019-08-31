'use strict'

/** @type {import('lucid-mongo/src/Migration')} */
const Schema = use('Schema')

class EntitySchema extends Schema {
  up () {
    this.create('entities', (collection) => {
      collection.increments();
      collection.string('name', 50);
      collection.string('project_id').references('projects._id');
      collection.timestamps();
    })
  }

  down () {
    this.drop('entities')
  }
}

module.exports = EntitySchema
