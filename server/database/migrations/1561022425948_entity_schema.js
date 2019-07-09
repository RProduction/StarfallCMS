'use strict'

/** @type {import('lucid-mongo/src/Migration')} */
const Schema = use('Schema')

// entity have schema field with object type
// schema consist of field: string, integer, float, boolean, file, object, array
// object = {}
// array = ['type']
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
