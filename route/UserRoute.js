const userRoute = require('express').Router()

const AllUser = require('../controller/UserController/AllUser')
const LoggedinUser = require('../controller/UserController/LoggedinUser')
const Login = require('../controller/UserController/Login')
const Register = require('../controller/UserController/Register')
const JwtGuard = require('../middleware/guard/jwtGuard')


userRoute
.get('/users',JwtGuard,  AllUser)
.post('/login', Login)
.post('/register', Register)
.post('/loggedin-user', JwtGuard, LoggedinUser)

module.exports = userRoute
