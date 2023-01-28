const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const server = express();
server.use(cors());
server.use(express.json());

const quizRouter = require("./routes/quiz");
server.use("/quiz",quizRouter);
server.get("/",(req,res)=>{
    res.json({
        error:false,
        message:"Welecome to quiz backend"
    })
})


server.listen(8080,async()=>{
    try{
        await connect();
        console.log("DB Connected")
        console.log("Server started on port on 8080")
    }catch(e){
        console.log(e.message)
    }
})
