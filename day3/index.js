import express from "express";
import {dirname } from "path";
import {fileURLToPath} from "url";
import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();
const port = 3000;

app.use(express.urlencoded( {extended : true}));
app.use(express.static('public'));


app.get("/" , (req,res) =>{
    res.sendFile(path.join(__dirname ,"public" , "index.html"));
} )

app.use((req,res,next) => {
    console.log(req.method , req.url);
    next();
})
app.post("/submit" , (req,res) => {
    res.send(req.body);
})

app.listen(port , () => {
    console.log(`Listening at ${port}`);
})