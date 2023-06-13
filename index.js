
const express = require('express');
const app = express()
var cors = require('cors')
const { router } = require('./Routes/job.routes');
const { connection } = require('./db');
require("dotenv").config();
app.use(cors())
app.use(express.json());
app.use('/',router)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
    
})