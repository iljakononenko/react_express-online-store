const ApiError = require("../error/ApiError");
module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }

    let host = req.get('origin');
    host = "http://test4.prodsell.pl"
    const regex = /:\/\/(\w+)\.prodsell\.pl/g;
    const found = regex.exec(host);

    if (found != null && found[1] != null) {
        console.log('Subdomain request')
        console.log(found[1])
        req.systemSource = found[1];
        next()
    } else {
        console.log('Main request')
        console.log(host)
        return next(ApiError.notFound("Subdomain not found"))
    }


}
