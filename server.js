const express = require ("express");
const bodyParser = require("body-parser");
const mongoose = require ("mongoose");
const productRouter = require("./routes/productRoute");
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log("server is up & running!"));
mongoose
.connect("mongodb://127.0.0.1:27017/REST-API")
.then(()=>console.log("DB Connected!"))
.catch((error)=>{
console.log(error);
});

// middleware 
app.use (bodyParser.json());
app.use("/products", productRouter);
