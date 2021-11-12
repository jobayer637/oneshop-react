const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 4000

const userRoute = require('./route/UserRoute')
const collectionRoute = require('./route/CollectionRoute')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/user', userRoute)
app.use('/api/collection', collectionRoute)

app.get('/', (req, res) => {
    res.send('Al-hamdu-lillah')
})

app.get('*', (req, res) => {
    res.send('404 not found')
})

app.listen(PORT, () => {
    console.log('server is running on port ' + PORT)
    mongoose.connect('mongodb://localhost:27017/oneshop', {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
})