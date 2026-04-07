import express from "express";
 
const app = express();

const port =5000;
    const a=10;
    const b=20;
app.get("/",(req,res) => {
    res.send(`<h1> Hey </h1> 
        <h2> Sum of Given Numbers is ${a+b} </h2>`);
})
app.listen(port , () => {

    console.log(`Sum of 2 numbers is : ${a} + ${b} = ${a+b}`);
})