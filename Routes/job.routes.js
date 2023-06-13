const { Getjobdata, Postdata } = require("../Controllers/job.controller")
const express = require('express');
const router = express.Router()

router.get('/',Getjobdata)
router.post('/',Postdata)

module.exports={
    router
}

