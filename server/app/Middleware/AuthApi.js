'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/auth/src/Auth')} Auth */

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Entity = use('App/Models/Entity');

class AuthApi {
	/**
	  * @param {object} ctx
	  * @param {Response} ctx.response
	  * @param {Auth} ctx.auth
	  * @param {Function} next
	  */
	async handle({ auth, response, params }, next) {
		// to access api need right authentication and target project
		// target project name and authenticated project name must same	
		try {
			const project = await auth.authenticator('api').getUser();
			if (project.name !== params.project) throw '';
			params.project = project._id;
		}
		catch (error) {
			Logger.warning('Need right project name to proceed');
			Logger.warning(error);
			return response.unauthorized('Need right project name to proceed');
		}

		// change entity from name into id if :entity exist
		try{
			if(params.entity){
				const entity = await Entity.findByOrFail('name', params.entity);
				params.entity = entity._id;
			}
		}
		catch{
			Logger.warning('Need right entity name to proceed');
			Logger.warning(error);
			return response.unauthorized('Need right entity name to proceed');
		}

		await next();
	}
}

module.exports = AuthApi
