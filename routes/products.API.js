const express = require('express');
const router = express.Router();
const productModel = require('../model/product.model');

router.post('/', async (req, resp) => {
    const { name, discription, price } = req.body;
    const creatProduct = new productModel({ name, discription, price });
    await creatProduct.save();
    resp.json({ message: "New Product is Added" });
})

router.get('/', async (req, resp) => {
    const allProducts = await productModel.find();
    resp.json(allProducts);
});

router.put('/:id', async (req, resp) => {
    const { id } = req.params;
    const { name, discription, price } = req.body;
    const updateProduct = await productModel.findByIdAndUpdate(id, { name, discription, price });
    resp.json({ message: "product is updated" });
})

router.delete('/:id', async (req, resp) => {
    const { id } = req.params;
    const { name, discription, price } = req.body;
    const deleteProduct = await productModel.findByIdAndDelete(id);
    resp.json({ message: "This product is deleted" })
})

module.exports = router;