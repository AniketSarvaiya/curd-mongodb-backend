const mongose = require('mongoose');


const productSchema = mongose.Schema(
    {
        name: { type: String, require: true },
        qty: { type: Number, require: true },
        price: { type: Number, require: true },
        dept: { type: String, require: true },
    },
    { timestamp: true })

module.exports = mongose.model("product", productSchema);