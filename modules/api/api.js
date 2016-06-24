var wrapper = require('./response_wrapper');


function displayText(req, res) {
    res.send("This is a template server. Check json / error routes");
}

function doSomething(req, res) {
    var queryParam = req.query.asdf;
    var response = {
        abcd: 1234,
        asdf: "LaLaLa",
        query: queryParam
    }
    wrapper.send(res, response);
}

function error(req, res) {
    var blah = req.query.blah;
    var error = {
        message: "This is an error",
    }
    wrapper.err(res, error);
}

function init(app) {
    app.get('/', displayText);
    app.get('/json', doSomething);
    app.get('/error', error);
}

module.exports = {
    init: init
}