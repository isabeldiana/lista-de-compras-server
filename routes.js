const express = require('express');
const cors = require('cors')
const app = express();
const {Products} = require('./app/models');

app.use(cors())

app.use(express.json())

app.get('/products', async (req, res) => {
    Products.findAll().then((result) => res.json(result))
});

app.post('/products', async (req, res) => {
    const products = await Products.create(req.body)
    return res.json(products);
});

    
app.listen(3333)

