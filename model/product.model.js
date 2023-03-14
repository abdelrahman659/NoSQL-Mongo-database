const mongoose = require('mongoose');

const productSchema = new mongoose.model("product", {
    name: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

module.exports = productSchema;