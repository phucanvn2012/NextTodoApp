const mongoose = require('mongoose')
const schema = mongoose.Schema

const userModel = new schema({   
    name:{type:String},
    email:{type:String},
    yob:{type: Number},
    role:{type:String}
})

module.exports = mongoose.model('users', userModel)