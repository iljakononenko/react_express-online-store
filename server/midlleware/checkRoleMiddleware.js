const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401)
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if (decoded.role !== "ADMIN") {
            return res.status(403).json({message: "No access"})
        }
        req.user = decoded;
        next()
    } catch (e) {
        return res.status(401).json({message: "Not authorized"})
    }
}
