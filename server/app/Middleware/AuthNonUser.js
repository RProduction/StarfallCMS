'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/auth/src/Auth')} Auth */

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class AuthNonUser {
	/**
	* @param {object} ctx
	* @param {Response} ctx.response
	* @param {Auth} ctx.auth
	* @param {Function} next
	*/
	async handle ({ response, auth }, next) {
		try{
            const user = await auth.getUser();
            Logger.info(user.authority);
			if(user.authority === 'User') throw('');
        }
        catch(error){
			Logger.warning('Need creator or manager authorization to proceed');
			Logger.warning(error);
            response.unauthorized('Need creator or manager authorization to proceed');
            return;
		}
		
		await next();
	}
}

module.exports = AuthNonUser
