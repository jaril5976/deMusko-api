//USER FIRST API
module.exports.first = function(req, res) {
    return res.send('user first api called')
};

//USER SECOND API
module.exports.second = function(req, res) {
    return res.send('user second api called')
};