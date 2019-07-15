'use strict'

const {validations} = require('indicative/validator');

class signup {
  get rules () {
    return {
      // validation rules
      username: [
        validations.required(),
        validations.min(5),
        validations.max(30),
        validations.regex(['^[a-zA-Z0-9]*$'])
      ],
      password: [
        validations.required(),
        validations.min(5),
        validations.max(30),
        validations.regex(['^[a-zA-Z0-9]*$'])
      ],
      authority: [
        validations.required(),
        validations.in(['Creator', 'Manager', 'User'])
      ]
    }
  }
}

module.exports = signup

