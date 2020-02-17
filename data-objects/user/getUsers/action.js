//IMPORT LIB
const ApplyValidationResponse = require('lib/applyValidationResponse');
var User = require('lib/user.js')

//CREATE NEW ACTION CALLED GETUSERS
async function GetUsers(){
    //CALL LOGIN FUNCTION
    const __resp = await new User().getUsers();
    //RETRUN RESPONSE
    return __resp;
}
//EXPORT ACTION
module.exports = GetUsers;