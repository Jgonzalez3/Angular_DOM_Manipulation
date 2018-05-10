require("../config/mongoose")();

const mongoose = require("mongoose");
module.exports = () =>{
    const TaskSchema = new mongoose.Schema({
        title: {type: String, required:[true, "Title Required"]},
        description: {type: String, required:[true, "Description Required"]},
        completed: {type: Boolean, default: false},
    }, {timestamps: true})
    Task = mongoose.model('Task', TaskSchema)
}