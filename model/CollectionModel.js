const { Schema, model } = require("mongoose");

const CollectionSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    image: {
        type: String,
        trim: true,
        default: 'collection.jpg'
    }
}, {
    timestamps: true
})

const Collection = model('Collection', CollectionSchema);
module.exports = Collection