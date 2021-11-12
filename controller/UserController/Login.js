const bcrypt = require('bcrypt');
const { findOne } = require('../../model/UserModel');
const User = require('../../model/UserModel')
// const saltRounds = 10;
const jwt = require('jsonwebtoken');
const privateKey = process.env.PRIVATE_KEY

const Login = (req, res) => {
    const { email, password } = req.body

    User.findOne({ email })
        .then(user => {
            if (user) {
                const token = jwt.sign(
                    { user },
                    privateKey,
                    { expiresIn: "10m" },
                    { algorithm: 'HS256' }
                );

                const checkPassword = bcrypt.compareSync(password, user.password) //return true or false
                if (checkPassword) {
                    res.json({
                        status: 'success',
                        data: user,
                        token: token
                    })
                } else {
                    res.json({ message: 'bad credentials', status: 'error', type: 'password', token })
                }
            } else {
                res.json({
                    type: 'password',
                    status: 'error',
                    message: 'user not found'
                })
            }
        })
        .catch(err => {
            res.json({
                type: 'password',
                status: 'error',
                message: 'user not found'
            })
        })
}

module.exports = Login