//LIB IMPORT
const CreateCustomer = require('data-objects/user/createCustomer/action');
const GetCustomers = require('data-objects/user/getCustomers/action');

/**
 * @api {post} /customer/createCustomer Customer Creation
 * @apiGroup customer
 * @apiDescription Customer Creation
 * @apiParamExample Postman:
 * fullname: 'chetan bardoliya',
 * email: '279chetan@gmail.com'
 * mobile: '9999999999'
 * address: 'xxxx, surat'
 */
module.exports.createCustomer = async function (req, res) {
    //GET DATA
    var data = req.body;
    //CALL ACTION
    const __resp = await CreateCustomer(data)
    //RETURN RESPONSE
    return res.send(__resp);
}

/**
 * @api {post} /customer/getCustomers Get All Customers
 * @apiGroup Customer
 * @apiDescription Get All Customers 
 * @apiParamExample Postman:
 * email: 'rajjariwala5976@gmail.com'
 * password: 'dev@123'
 */
module.exports.getCustomers = async function (req, res) {
    // //GET DATA
    // var data = req.body;
    //CALL ACTION
    const __resp = await GetCustomers()
    //RETURN RESPONSE
    return res.send(__resp);
}
