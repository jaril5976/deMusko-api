//LIB IMPORT
const Joi = require('joi');
const Regex = require('lib/regex.js');
//VALIDATION SCHEMA
const schema = Joi.object().options({ abortEarly: false }).keys({
    fullname:Joi.string().label('Full name').required(),
    email:Joi.string().regex(new Regex().Email()).label('Email').required(),
    sex: Joi.string().label('Gender').required(),
    mobile: Joi.string().regex(new Regex().Phone()).label('Mobile number').required(),
    address: Joi.string().label('Address').required()
});
//EXPORT SCHEMA
module.exports = schema;