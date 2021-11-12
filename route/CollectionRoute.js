const collectionRoute = require('express').Router()
const AllCollection = require('../controller/CollectionController/AllCollection')
const CreateCollection = require('../controller/CollectionController/CreateCollection')


collectionRoute
    .get('/collections', AllCollection)
    .post('/create', CreateCollection)


module.exports = collectionRoute
