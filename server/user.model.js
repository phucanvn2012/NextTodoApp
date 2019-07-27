const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({   
    id:{type:Number},
    name:{type:String},
    email:{type:String},
    yob:{type: Number},
    role:{type:String}
})

module.exports = mongoose.model('user', userModel)