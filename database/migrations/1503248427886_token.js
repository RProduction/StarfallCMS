'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class TokensSchema extends Schema {
  up () {
    Logger.info('Create tokens table');
    this.create('tokens', (table) => {
      table.bigIncrements();
      table.bigInteger('user_id').notNullable().references('projects.id');
      table.string('token', 255).notNullable().unique();
      table.string('type', 80).notNullable();
      table.boolean('is_revoked').notNullable().defaultTo(false);
      table.timestamps();
    })
  }

  down () {
    Logger.info('Drop tokens table');
    this.drop('tokens')
  }
}

module.exports = TokensSchema
