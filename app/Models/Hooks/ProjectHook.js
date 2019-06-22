'use strict'

const crypto = require('crypto');

const ProjectHook = exports = module.exports = {}

ProjectHook.beforeCreate = async (modelInstance) => {
    modelInstance.public_key = crypto.randomBytes(30).toString('hex');
}
