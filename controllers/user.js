//LIB IMPORT
const db = require('server/models/index.js');
const RegisterUser = require('data-objects/user/register/action');

/**
 * @api {get} /user/first This is first api
 * @apiGroup User
 * @apiDescription First API
 */
module.exports.first = function (req, res) {
    //RETURN RESPONSE
    return res.send('user first api called')
};

/**
 * @api {get} /user/second This is second api
 * @apiGroup User
 * @apiDescription Second API
 */
module.exports.second = function (req, res) {
    //RETURN RESPONSE
    return res.send('user second api called')
};

/**
 * @api {get} /user/fetch_data This is fetch api
 * @apiGroup User
 * @apiDescription Fetch API
 * @apiParamExample Postman:
 * first_name: 'Raj'
 * last_name: 'Jariwala'
 * email: 'rajjariwala5976@gmail.com'
 */
module.exports.fetch_data = function (req, res) {
    //GET REQUEST DATA
    var data = req.body;
    //RETRUN RESPONSE
    return res.send({ 'data': `Hey My Name is ${data.first_name}  ${data.last_name} and My Email is ${data.email}` });
}

/**
 * @api {get} /user/loop_sample Loop Example
 * @apiGroup User
 * @apiDescription Loop Example
 * @apiParamExample Postman:
 * text: 'Raj'
 * count: 5
 */
module.exports.loop_sample = function (req, res) {
    //GET REQUEST DATA
    var data = req.body;
    var count = data.count;
    var i;
    var Text=[];
    //LOOP FOR PROCESSING
    for (i = 0; i < count; i++) {
        if (i % 2 == 0) {
            Text.push(data.text)
        } else {
            Text.push('Hello World!')
        }
    }
    //RETURN RESPONSE
    return res.send(Text);
}

/**
 * @api {post} /user/add_todo Sample add data
 * @apiGroup User
 * @apiDescription Sample add data
 * @apiParamExample Postman:
 * title: 'Raj'
 */
module.exports.add_todo = async function (req, res) {
    //GET REQUEST DATA
    var todoItem = req.body.title;
    //CREATE SQL QUERY FOR ADD NEW TITLE
    const __resp = await db.todo.create({
        title: todoItem
    });
    //RETURN DATABASE RESPONSE
    return res.send(__resp);
}

/**
 * @api {post} /user/register User Registration
 * @apiGroup User
 * @apiDescription User Registration
 * @apiParamExample Postman:
 * first_name: 'Raj',
 * last_name: 'Jariwala'
 * email: 'rajjariwala5976@gmail.com'
 * password: 'dev@123'
 */
module.exports.register = async function (req, res) {
    //GET DATA
    var data = req.body;
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
    // var data = req.body;
    //CALL ACTION
    // const __resp = await LoginUser(data)
    //RETURN RESPONSE
    // return res.send(__resp);
}

