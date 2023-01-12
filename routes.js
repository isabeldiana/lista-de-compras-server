const express = require('express');
const cors = require('cors')
const app = express();
const {Products} = require('./app/models');


app.use(cors())

app.use(express.json())

app.get('/products', async (req, res) => { 
    try {
        const productsList = await Products.findAll();
        return res.json(productsList);
    } catch (error) {
        return console.error("Error na busca", error);
    }
    
});

app.post('/products', async (req, res) => {
    const {products, amount} = req.body;
    try {
        const productsList = await Products.create( {products, amount});
        return res.json(productsList);
    } catch (error) {
        return console.error("Error ao adicionar", error);
    }
    
});

app.delete('/products/:id', async (req, res) => {
   try {
        await Products.destroy({where: {id: req.params.id}});
        return res.json({message: `Exclusao do item ID ${req.params.id} feita com sucesso`});
   } catch (error) {
        return console.err("Error na exclusao", error);
   }
    
});
    
app.listen(3333)

