require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://txtony9:SHOPit@cluster5.wnepgcz.mongodb.net/');

module.exports = mongoose.connection;
