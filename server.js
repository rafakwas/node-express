const express = require('express');
const logger = require('morgan');
var cors = require('cors');
const users = require('./routes/users');
const products = require('./routes/products');
const orders = require('./routes/orders');
const bodyParser = require('body-parser');
const mongoose = require('./config/database'); //database configuration
const app = express();
app.use(cors());

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // parse application/json

app.use('/users', users);
app.use('/products',products);
app.use('/orders',orders);

app.get('/', function(req, res){
    res.json({"tutorial" : "Build REST API with node.js"});
});

app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    console.log(err);

    if(err.status === 404)
        res.status(404).json({message: "Not found"});
    else
        res.status(500).json({message: "Something looks wrong :( !!!"});

});

app.listen(3000, function(){
    console.log('Node server listening on port 3000');
});
