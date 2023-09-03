const Product = require('../models/product.js')
const insertProducts = async (req, res) => {

    try {
        const { name, qty, price, dept } = req.body;
        const prod = new Product(req.body);
        prod.save();
        console.log(prod);
        res.send({ msg: "Inserted...!", prod });
    } catch (error) {
        res.send(error)
    }
}

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        console.log(product);
        res.send(product);
    } catch (error) {
        res.send(error)
    }
}

const deleteOne = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndRemove({ _id: id });
        console.log(product);
        res.send("deleted success...!")
    } catch (error) {
        res.send(error)
    }
}

const getAll = async (req, res) => {
    try {
        const data = await Product.find({});
        console.log(data);
        res.send(data);
    } catch (error) {
        res.send(error)
    }
}
module.exports = { insertProducts, updateProduct, deleteOne, getAll }