const bcrypt = require('bcrypt');
const User = require('../../model/UserModel')
const saltRounds = 10;

const Register = (req, res) => {
    const { name, email, phone, password } = req.body
    const hash = bcrypt.hashSync(password, saltRounds);

    const newUser = new User({
        name, email, phone, password: hash
    })
    newUser.save()
        .then(user => {
            res.json({
                status: 'success',
                data: user
            })
        })
        .catch(err => {
            res.json({
                status: 'error',
                data: err
            })
        })
}

module.exports = Register