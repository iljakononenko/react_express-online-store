const ApiError = require("../error/ApiError");
module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }

    let origin = req.get('origin');
    // origin = "http://test.prodsell.pl"
    const regex = /:\/\/(\w+)\.prodsell\.pl/g;

    let found;
    if (origin.includes('localhost')) {
        found = ["", 'localhost']
    } else {
        found = regex.exec(origin)
    }

    if (found != null && found[1] != null) {
        console.log('Subdomain request')
        console.log(found[1])
        req.systemSource = found[1];
        next()
    } else {
        console.log('Main request')
        console.log(origin)
        return next(ApiError.notFound("Subdomain not found"))
    }


}
