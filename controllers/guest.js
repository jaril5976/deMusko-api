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
//FETCH_DATA API FUNCTION
module.exports.dataGet = function (req, res) {
    
    var data = req.body;

    return res.send({
        'data': `Hey my name is ${data.first_name} ${data.last_name} and my email is ${data.email}, you should add my phone number : ${data.phone_number}.`
    });
}

