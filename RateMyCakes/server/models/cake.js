require("../config/mongoose")();

const mongoose = require("mongoose");
module.exports = ()=>{
    const CommentSchema = new mongoose.Schema({
        comment: {type: String, required: [true, "Comment Required"]},
        rating: {type: Number}
    }, {timestamps: true})
    const CakeSchema = new mongoose.Schema({
        baker: {type: String, required: [true, "Baker Name Required"]},
        image: {type: String, required: [true, "Image URL required"]},
        comments: [{type: CommentSchema, ref: 'Comm'}]
    }, {timestamps: true})
    Comm = mongoose.model('Comm', CommentSchema);
    Cake = mongoose.model('Cake', CakeSchema);
}