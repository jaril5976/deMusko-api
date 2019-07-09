//IMPORT LIB
const ApplyValidationResponse = require('lib/applyValidationResponse');
const schema = require('./validation');

//CREATE NEW ACTION CALLED REGISTER
async function Manan(data){
    //JOI VALIDATION
    const response = await new ApplyValidationResponse().validate(schema, data);
    if (response.failed)
      return response;
    //CALL REGISTER FUNCTION
    const __resp = "API successfully executed"
    //RETRUN RESPONSE
    return __resp;
}
//EXPORT ACTION
module.exports = Manan;