
const mongoose = require('mongoose')


const job = new mongoose.Schema(
    {
        company: String,
        postedAt: String,
        city: String,
        location: String,
        role: String,
        level: String,
        contract: String,
        position: String,
        language: String,
    },
    { versionKey:false }
)

const Newjob = mongoose.model('Job',job)

module.exports={
    Newjob
}
