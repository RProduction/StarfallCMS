'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/auth/src/Auth')} Auth */

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class AuthAll {
	/**
	* @param {object} ctx
	* @param {Response} ctx.response
	* @param {Auth} ctx.auth
	* @param {Function} next
	*/
  	async handle ({ auth, response }, next) {
		try{
			await auth.check();
		}
		catch(error){
			Logger.info('Need to be authorized to proceed');
			response.unauthorized('Need to be authorized to proceed');
			return;
		}

		await next();
  	}
}

module.exports = AuthAll
