const mongoose = require('mongoose')
require("dotenv").config();

const connection = mongoose.connect('mongodb+srv://shoaib:shoaibmansuri@cluster0.zghdsdl.mongodb.net/job?retryWrites=true&w=majority')

module.exports={
    connection
}
