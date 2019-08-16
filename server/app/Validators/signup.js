'use strict'

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class signup {
	get rules() {
		return {
			// validation rules
			username: "required|min:5|max:30|regex:^[a-zA-Z0-9]*$",
			password: "required|min:5|max:30|regex:^[a-zA-Z0-9]*$",
			authority: "required|in:Creator,Manager,User"
		}
	}

	async fails(errorMessages) {
		Logger.warning('Fail in validating signup routes');
        Logger.warning(errorMessages);
		return this.ctx.response.send(errorMessages);
	}
}

module.exports = signup

