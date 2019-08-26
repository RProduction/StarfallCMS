'use strict'

/** @type {import('lucid-mongo/src/Migration')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (collection) => {
      collection.increments();
      collection.index('username', {username: 1}, {unique: true});
      collection.string('password', 60);
      collection.boolean('is_creator');
      collection.timestamps();
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
