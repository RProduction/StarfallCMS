'use strict'

const {validations} = require('indicative/validator');

class entity {
  get rules () {
    return {
      // validation rules
      name: [validations.required(), 
        validations.min(1),
        validations.max(50),
        validations.regex(['^[a-zA-Z0-9_]+$'])
      ]
    }
  }
}

module.exports = entity
