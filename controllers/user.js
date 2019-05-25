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

module.exports.gender=function(req,res){
    var data=req.body;
    console.log(data);
}
