//LIB IMPORT
const Joi = require('joi');
const Regex = require('lib/regex.js');
//VALIDATION SCHEMA
const schema = Joi.object().options({ abortEarly: false }).keys({
    first_name:Joi.string().regex(new Regex().NameVal()).label('First name').required(),
    last_name:Joi.string().regex(new Regex().NameVal()).label('Last name').required(),
    phone: Joi.string().regex(new Regex().Phone()).label('Phone number').required(),
    email:Joi.string().regex(new Regex().Email()).label('Email').required(),
    password: Joi.string().regex(new Regex().Password()).label('Password'),
});
//EXPORT SCHEMA
module.exports = schema;