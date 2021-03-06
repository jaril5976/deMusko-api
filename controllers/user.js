//LIB IMPORT
const db = require('server/models/index.js');
const RegisterUser = require('data-objects/user/register/action');
const UserLogin = require('data-objects/user/login/action');
const GetUsers = require('data-objects/user/getUsers/action');
const find = require('lodash/find');

/**
 * @api {post} /user/register User Registration
 * @apiGroup User
 * @apiDescription User Registration
 * @apiParamExample Postman:
 * first_name: 'Raj',
 * last_name: 'Jariwala'
 * email: 'rajjariwala5976@gmail.com'
 * password: 'dev@123'
 * profile_image: 'file'
 */
module.exports.register = async function (req, res) {
    //GET DATA
    var data = req.body;
    //FILE DATA
    if (req.files.length > 0) {
        data.profile_image = find(req.files, { fieldname: "profile_image" })
    }
    //CALL ACTION
    const __resp = await RegisterUser(data)
    //RETURN RESPONSE
    return res.send(__resp);
}

/**
 * @api {post} /user/login User Login
 * @apiGroup User
 * @apiDescription User Login
 * @apiParamExample Postman:
 * email: 'rajjariwala5976@gmail.com'
 * password: 'dev@123'
 */
module.exports.login = async function (req, res) {
    //GET DATA
    var data = req.body;
    //CALL ACTION
    const __resp = await UserLogin(data)
    //RETURN RESPONSE
    return res.send(__resp);
}

/**
 * @api {post} /user/getUsers Get All Users
 * @apiGroup User
 * @apiDescription Get All Users 
 * @apiParamExample Postman:
 * email: 'rajjariwala5976@gmail.com'
 * password: 'dev@123'
 */
module.exports.getUsers = async function (req, res) {
    // //GET DATA
    // var data = req.body;
    //CALL ACTION
    const __resp = await GetUsers()
    //RETURN RESPONSE
    return res.send(__resp);
}
