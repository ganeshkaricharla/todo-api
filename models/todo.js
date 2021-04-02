const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({

    name:
    {
        type: String,
        required :true
    },
    description:
    {
        type: String,
        required : true
    },
    creator:
    {
        type: String,
        required : true
    },
    duration:
    {
        type:Number,
        required: true
    },
    createdat:
    {
        type:Date,
        required : true
    },
    deleteat:
    {
        type:Date,
        expires:0
    }

})


module.exports = mongoose.model('Todo',todoSchema)