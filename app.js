//spins up expressJS
const express = require ('express');
const app = express();

const productRoutes = require('./api/routes/products');

//incoming request has to go through this
app.use('/products', productRoutes);

module.exports = app;

