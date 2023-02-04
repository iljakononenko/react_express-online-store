module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }

    console.log("req hostname:")
    console.log(req.hostname)
    console.log("req origin:")
    console.log(req.get('origin'))

    const host = req.headers.host;

    console.log("middleware host:")
    console.log(host)

    req.systemSource = host;
    next()
}
