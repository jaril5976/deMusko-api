//LIB IMPORT
const db = require('server/models/index.js');
const RegisterUser = require('data-objects/user/register/action');
const UserLogin = require('data-objects/user/login/action');
const User_get_single = require('data-objects/user/get_single/action');
const find = require('lodash/find');
const User = require('lib/user')

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
    if(req.files.length > 0){
        data.profile_image = find(req.files, {fieldname: "profile_image"})
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

module.exports.read = async function (req, res) {
    var users = new User();
    var user_data = await users.read();

    //RETURN RESPONSE
     return res.send(user_data);
    }

     module.exports.indi = async function (req, res) {
        var userid = req.body.uid
        var user = new User();
        var usrdata = await User_get_single(req.body);
   
     return res.send(usrdata);
     }