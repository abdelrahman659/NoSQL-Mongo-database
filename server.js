const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const product = require('./routes/products.API');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cors());

mongoose.connect(process.env.MONGO_URL);
app.use('/api/product', product)
app.get('/', (req, resp) => {
    resp.send('Server is running....')
})

app.listen(port, () => {
    console.log(`This App Run on port ${port}`)
})