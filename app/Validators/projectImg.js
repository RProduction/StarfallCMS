'use strict'

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class projectImg {
	get rules() {
		return {
			// validation rules
			img: "required|file|file_ext:png,jpg,jpeg|file_size:10mb"
		}
	}

	async fails(errorMessages) {
		Logger.warning('Fail in validating project img routes');
		Logger.warning(errorMessages);
		return this.ctx.response.send(errorMessages);
	}
}

module.exports = projectImg
