//FIRST API FUNCTION
module.exports.first = function(req, res) {
    return res.send('guest first api called')
};

//SECOND API FUNCTION
module.exports.second = function(req, res) {
    return res.send('guest second api called')
};

//THIRD API FUNCTION
module.exports.copy = function(req, res) {
    //FORM DATA GET BY REQ.BODY
    console.log('Incoming form data  :->', req.body)
    //FORM FILE GET BY REQ.FILES
    console.log('Incoming file data  :->', req.files)
    return res.send('Please check your node app console!')
};