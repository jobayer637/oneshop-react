const User = require('../../model/UserModel')

const LoggedinUser = (req, res) => {
    const user = req.user
    res.json({
        data: user
    })
}

module.exports = LoggedinUser