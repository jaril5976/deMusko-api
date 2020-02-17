//IMPORT LIB
const ApplyValidationResponse = require('lib/applyValidationResponse');
var Customer = require('lib/customer.js')
const schema = require('./validation');

//CREATE NEW ACTION CALLED CreateCustomer
async function CreateCustomer(data){
    //JOI VALIDATION
    const response = await new ApplyValidationResponse().validate(schema, data);
    if (response.failed)
      return response;
    //CALL REGISTER FUNCTION
    const __resp = await new Customer().createCustomer(data);
    //RETRUN RESPONSE
    return __resp;
}

//EXPORT ACTION
module.exports = CreateCustomer;