//LIB IMPORT
const Joi = require('joi');
const Regex = require('lib/regex.js');
//VALIDATION SCHEMA
const schema = Joi.object().options({ abortEarly: false }).keys({
    uid:Joi.number().positive().required(),
});
//EXPORT SCHEMA
module.exports = schema;