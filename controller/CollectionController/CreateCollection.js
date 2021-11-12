const Collection = require('../../model/CollectionModel')

const CreateCollection = (req, res) => {
    const { name } = req.body
    const newCollection = new Collection({
        name: name
    })

    newCollection.save()
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

module.exports = CreateCollection