'use strict'

/** @type {import('lucid-mongo/src/Migration')} */
const Schema = use('Schema')

class DocumentSchema extends Schema {
  up () {
    this.create('documents', (collection) => {
      collection.increments();
      collection.string('entity_id').references('entities._id');
      collection.timestamps();
    })
  }

  down () {
    this.drop('documents')
  }
}

module.exports = DocumentSchema
