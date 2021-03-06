const express = require("express")
const mongoose = require("mongoose")
const url = 'mongodb+srv://ganesh:ganesh1@cluster0.0csf7.mongodb.net/todoDBex?retryWrites=true&w=majority'
const app = express()
let PORT = process.env.PORT || 3000;

mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology:true}).catch(error => console.log(error));

const con = mongoose.connection
con.on('open',  ()=> { console.log("Database Connected")  } )

app.use(express.json())
const todoRouter = require("./routes/task")
app.use('/',todoRouter)


app.listen(PORT, () => console.log("Server Started"))