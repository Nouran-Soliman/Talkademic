import Express from "express";
import Products from "./products.js"

const app = Express();
const port = 3000;

//path, callback fn
app.get("/", (req, res)=>{
    res.json(Products);
})

app.listen(port, () => console.log("listening " + port))