const express = require('express');
const productController = require('../controllers/productController')

const routes = express.Router();


routes.post("/add", productController.insertProducts);
routes.put("/update/:id", productController.updateProduct);
routes.delete("/delete/:id", productController.deleteOne);
routes.get("/getall", productController.getAll);


module.exports = routes;