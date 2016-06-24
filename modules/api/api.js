var resWrapper = require('./response_wrapper');


function displayText(req, res) {
    res.send("This is a node-docker-template server. Check json / error routes");
}

function doSomething(req, res) {
    var queryParam = req.query.asdf;
    var response = {
        abcd: 1234,
        asdf: "LaLaLa",
        query: queryParam
    }
    console.log("TEST");
    resWrapper.send(res, response);
}

function error(req, res) {
    var blah = req.query.blah;
    var error = {
        message: "This is an error",
    }
    resWrapper.err(res, error);
}

module.exports = {
    displayText: displayText,
    doSomething: doSomething,
    error: error
}