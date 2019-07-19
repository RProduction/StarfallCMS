'use strict'

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class entity {
	get rules() {
		return {
			// validation rules
			name: "required|min:1|max:50|regex:['^[a-zA-Z0-9_]+$']"
		}
	}

	async fails(errorMessages) {
		Logger.warning('Fail in validating entity routes');
        Logger.warning(errorMessages);
		return this.ctx.response.send(errorMessages);
	}
}

module.exports = entity
