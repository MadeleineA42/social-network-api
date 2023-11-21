// DO NOT TOUCH ITS GOOD 
const mongoose = require('mongoose');
// const connectionStringURI = `mongodb://127.0.0.1:27017/FriendsAndThoughts`;
mongoose.connect('mongodb://127.0.0.1:27017/FriendsAndThoughts');
// mongoose.connect(process.env.MONGOURI);

module.exports = mongoose.connection;