const User = require('../../model/UserModel')

const AllUser = (req, res) => {


    User.find()
        .then(user => {
            res.json({
                users: user
            })
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports = AllUser