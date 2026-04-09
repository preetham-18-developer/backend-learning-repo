import express from "express";

const app = express();
const port = 3000;

app.get("/" , (req ,res) => {
    res.send("<h1> heyy hii </h1>");
})

app.post("/about" ,(req,res)=>{
    res.send("<p> This is Post Method </P>");
})
app.put("/about" ,(req,res)=>{
    res.send("<p>Before it is Post now  This is put Method </P>");
})
app.patch("/about" ,(req,res)=>{
    res.send("<p> This is patch Method </P>");
})
app.delete("/about" ,(req,res)=>{
    res.send("<p> This is Post Method </P>");
})

app.listen( port , () => {
    console.log("heyy Backend Server running");
});
