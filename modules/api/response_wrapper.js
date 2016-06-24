/**
 * Common Methods for wrapping the response of a service
 */

// Wraps a proper response
function wrapResponse(object, errors, code, meta) {
    var response = {
        meta: meta,
        status_code: code,
        errors: errors,
        body: object
    }

    if(object !== undefined && object.length !== undefined) {
        if(meta === undefined) {
            response.meta = {};
        }
        response.meta.objects_returned = object.length;
    }

    if(code === undefined) {
        response.status_code = 200;
    }

    return response;
}

// Wraps Error Message
function wrapError(err, status, meta) {
    console.error(err.message);
    var status = err.status_code || 404;
    return wrapResponse(undefined, err, status); // TODO handle errors properly here
}

function send(res, object, meta) {
    res.status(200).json(wrapResponse(object, undefined, 200, meta));
}

function err(res, error, meta) {
    var status = error.status_code || 404;
    res.status(status).json(wrapError(error, meta));
}

module.exports = {
    send: send,
    err: err
}