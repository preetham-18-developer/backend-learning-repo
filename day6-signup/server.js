import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import {dirname} from "path";

const __dirname=dirname(fileURLToPath(import.meta.url));

const app=express();
const port =3000;
app.use(express.urlencoded({extended : true}));
app.use(cors());

app.use(express.static(path.join( __dirname,"public")));
app.post("/submit" , (req,res) => {
    const username = req.body.username;
    const mail = req.body.mail;
    const number = req.body.number;

    res.send("<h2>Form Submitted</h2>")
})

app.listen(port , () => {
    console.log(`Port running at ${port}`);
})