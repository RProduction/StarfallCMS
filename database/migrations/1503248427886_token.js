'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokensSchema extends Schema {
  up () {
    this.create('tokens', (table) => {
      table.bigIncrements();
      table.bigInteger('user_id').notNullable().references('projects.id');
      table.string('token').notNullable().unique();
      table.string('type', 80).notNullable();
      table.boolean('is_revoked').notNullable().defaultTo(false);
      table.timestamps();
    })
  }

  down () {
    this.drop('tokens')
  }
}

module.exports = TokensSchema
