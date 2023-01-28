const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
    category:String,
    type:String,
    difficulty:String,
    question:String,
    correct_answer:String,
    incorrect_answers:Array
},{
    versionKey:false,
    timestamps:true
})

const Quiz = mongoose.model("quiz",quizSchema);

module.exports = Quiz;