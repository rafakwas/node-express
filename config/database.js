console.log('in db config');
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/shop';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;
/*const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));*/