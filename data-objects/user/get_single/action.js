//IMPORT LIB
const ApplyValidationResponse = require('lib/applyValidationResponse');
var User = require('lib/user.js')
const schema = require('./validation');

//CREATE NEW ACTION CALLED LOGIN
async function User_get_single(userid){
    //JOI VALIDATION
    const response = await new ApplyValidationResponse().validate(schema, userid);
    if (response.failed)
      return response;
    //CALL LOGIN FUNCTION
    const __resp = await new User().indi(userid.uid);
    //RETRUN RESPONSE
    return __resp;
}
//EXPORT ACTION
module.exports = User_get_single;