'use strict'

/** @type {import('lucid-mongo/src/Migration')} */
const Schema = use('Schema')

class TokensSchema extends Schema {
  up () {
    this.create('tokens', (collection) => {
      collection.increments();
      collection.string('user_id').references('projects._id');
      collection.index('token', {token: 1}, {unique: true});
      collection.string('type', 80);
      collection.boolean('is_revoked').defaultTo(false);
      collection.timestamps();
    })
  }

  down () {
    this.drop('tokens')
  }
}

module.exports = TokensSchema
