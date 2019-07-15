'use strict'

const {validations} = require('indicative/validator');

class signin {
  get rules () {
    return {
      // validation rules
      username: [
        validations.required(),
        validations.regex(['^[a-zA-Z0-9]*$'])
      ],
      password: [
        validations.required(),
        validations.regex(['^[a-zA-Z0-9]*$'])
      ]
    }
  }
}

module.exports = signin
