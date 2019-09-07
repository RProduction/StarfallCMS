'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class UserSchema extends Schema {
  up () {
    Logger.info('Create users table');
    this.create('users', (table) => {
      table.bigIncrements();
      table.string('username', 80).notNullable().unique();
      table.string('password', 60).notNullable();
      table.boolean('is_creator').notNullable().defaultTo(false);
      table.timestamps();
    })
  }

  down () {
    Logger.info('Drop users table');
    this.drop('users')
  }
}

module.exports = UserSchema
