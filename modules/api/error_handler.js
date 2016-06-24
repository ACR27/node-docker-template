function create(message, code) {
    return {
        message: message,
        status_code: code
    }
}

module.exports = {
    create: create
}