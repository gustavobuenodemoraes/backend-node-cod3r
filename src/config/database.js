const mogoose = require('mongoose');
mogoose.Promise = global.Promise;
const uri = "mongodb://localhost/todo";
module.exports = mogoose.connect(uri);