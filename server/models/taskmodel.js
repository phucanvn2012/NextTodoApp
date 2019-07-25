const mongoose = require('mongoose')
const schema = mongoose.Schema

let taskModel   = new Schema({
    todo_description:{type:String},
    todo_responsible:{type:String},
    todo_priority:{type:String},
    todo_completed:{type: Boolean}
});

module.exports = mongoose.model('tasks',taskModel)