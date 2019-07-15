'use strict'

const {validations} = require('indicative/validator');

class project {
  get rules () {
    return {
      // validation rules
      name: [validations.required(), 
        validations.min(1),
        validations.max(50),
        'unique:projects, name', 
        validations.regex(['^[a-zA-Z0-9_]+$'])
      ]
    }
  }


}

module.exports = project
