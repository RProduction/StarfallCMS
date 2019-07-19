'use strict'

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class signin {
	get rules() {
		return {
			// validation rules
			username: "required|regex:[a-zA-Z0-9]*$",
			password: "required|regex:[a-zA-Z0-9]*$"
		}
	}

	async fails(errorMessages) {
		Logger.warning('Fail in validating signin routes');
        Logger.warning(errorMessages);
		return this.ctx.response.send(errorMessages);
	}
}

module.exports = signin
