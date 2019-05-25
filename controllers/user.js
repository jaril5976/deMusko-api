//USER FIRST API
module.exports.first = function (req, res) {
    return res.send('user first api called')
};

//USER SECOND API
module.exports.second = function (req, res) {
    return res.send('user second api called')
};

//FETCH DATA

module.exports.fetch_data = function (req, res) {
    var data = req.body;
    // console.log('sdfdsf:->', data)
    return res.send({ 'data': `Hey My Name is ${data.first_name}  ${data.last_name} and My Email is ${data.email}` });
}
