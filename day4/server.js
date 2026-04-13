import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 5500;
app.use(express.urlencoded( {extended : true}));


app.get("/" , (req,res) =>{
    res.sendFile(path.join(__dirname ,"index.html"));
} )

app.use((req,res,next)=> {
     console.log(req.method , req.url);
     next();
})
app.post("/" , (req , res) => {
    res.send(" <h2> hey it is working </h2>");
})

app.listen( port , () => {
    console.log(`listening at ${port}`);
})