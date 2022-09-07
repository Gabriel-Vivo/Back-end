const express = require("express");
const { use } = require("./routes/prodcutos.js");
const porductRouter = require ("./routes/prodcutos.js")
const app = express();


let puerto = 8080;

const server = app.listen(puerto, () => console.log("Server Up!!"));

app.use(express.json())


app.use(express.static("public"))

app.use("/api/productos", porductRouter )