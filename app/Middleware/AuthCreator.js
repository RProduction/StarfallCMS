'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/auth/src/Auth')} Auth */

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class AuthCreator {
	/**
	* @param {object} ctx
	* @param {Response} ctx.response
	* @param {Auth} ctx.auth
	* @param {Function} next
	*/
  	async handle ({ auth, response }, next) {
		try{
			const user = await auth.getUser();
			if(!user.is_creator) throw '';
		}
		catch(error){
			Logger.warning('Need creator authorization to proceed');
			Logger.warning(error);
			return response.unauthorized('Need creator authorization to proceed');
		}

		await next();
  	}
}

module.exports = AuthCreator
