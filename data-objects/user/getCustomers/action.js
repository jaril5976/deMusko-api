//IMPORT LIB
const ApplyValidationResponse = require('lib/applyValidationResponse');
var Customer = require('lib/customer.js')

//CREATE NEW ACTION CALLED GETCUSTOMERS
async function GetCustomers(){
    //CALL LOGIN FUNCTION
    const __resp = await new Customer().getCustomers();
    //RETRUN RESPONSE
    return __resp;
}
//EXPORT ACTION
module.exports = GetCustomers;