const mongoose = require("mongoose");

const connect = async() => {
    return await mongoose.connect("mongodb+srv://mongo:mongo@cluster0.j7baayh.mongodb.net/quiz?retryWrites=true&w=majority")
}

module.exports = connect;