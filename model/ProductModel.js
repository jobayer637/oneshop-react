const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    collection:     { type: Schema.Types.ObjectId, ref: 'Collection' },
    name:           { type: String, trim: true, required: true },
    description:    { type: String, trim: true },
    price:          { type: Number, trim: true },
    quantity:       { type: Number, trim: true },
    colors:         [{type: String, trim: true}],
    images:         [{type: String, trim: true}],
    size:           [{type: String, trim: true}]
}, {
    timestamps: true
})

const Product = model('Product', ProductSchema);
module.exports = Product