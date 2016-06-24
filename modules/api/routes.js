var api = require('./api');

function init(app) {
    app.get('/', api.displayText);
    app.get('/json', api.doSomething);
    app.get('/error', api.error);
}


module.exports = {
    init: init
}