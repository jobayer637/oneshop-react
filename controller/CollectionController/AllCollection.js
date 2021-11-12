const Collection = require('../../model/CollectionModel')

const AllCollection = (req, res) => {
    Collection.find()
        .then(data => {
            res.json({
                status: 'success',
                data: data
            })
        })
        .catch(err => {
            res.json({
                status: 'error',
                data: err
            })
        })
}

module.exports = AllCollection