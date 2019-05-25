//USER FIRST API
module.exports.first = function (req, res) {
    return res.send('user first api called')
};

//USER SECOND API
module.exports.second = function (req, res) {
    return res.send('user second api called')
};

//YASH API

module.exports.yash = function (req, res) {
    return res.send({
        'name': 'yash',
        'email': 'yash@gmail.com',
        'phone': '987654321'
        });
};