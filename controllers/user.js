//USER FIRST API
module.exports.first = function(req, res) {
    return res.send('user first api called')
};

//USER SECOND API
module.exports.second = function(req, res) {
    return res.send('user second api called')
};

//USER MITUL API
module.exports.mitul = function(req, res) {
    return res.send({NAME: 'Mitul',EMAIL: 'mitul.pancholi@live.com',PHONE: +919624480764})
};
