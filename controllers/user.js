const db = require('../server/models/index.js');

/**
 * @api {get} /user/first This is first api
 * @apiGroup User
 * @apiDescription First API
 */
module.exports.first = function (req, res) {
    return res.send('user first api called')
};

/**
 * @api {get} /user/second This is second api
 * @apiGroup User
 * @apiDescription Second API
 */
module.exports.second = function (req, res) {
    return res.send('user second api called')
};

module.exports.fetch_data = function (req, res) {
    var data = req.body;
    // console.log('sdfdsf:->', data)
    return res.send({ 'data': `Hey My Name is ${data.first_name}  ${data.last_name} and My Email is ${data.email}` });
}

module.exports.loop_sample = function (req, res) {
    var data = req.body;
    // console.log('Data :->',data);

    var count = data.count;
    var i;
    var Text=[];

    for (i = 0; i < count; i++) {
        if (i % 2 == 0) {
            // console.log(data.text);
            // Text[i] = data.text;
            Text.push(data.text)
        } else {
            // console.log('Hello World');
            Text.push('Hello World!')
        }
    }

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
    var todoItem = req.body.title;
    const __resp = await db.todo.create({
        title: todoItem
    });
    return res.send(__resp);
}

