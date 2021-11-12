const jwt = require('jsonwebtoken');
const privateKey = process.env.PRIVATE_KEY

const JwtGuard = (req, res, next) => {
    try {
        const { authorization } = req.headers
        const token = authorization.split(' ')[1]
        var decoded = jwt.verify(token, privateKey);
        req.user = decoded.user
        // console.log(decoded)
        next()
    } catch (err) {
        res.json({
            error: err
        })
    }
}

module.exports = JwtGuard