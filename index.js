const express = require("express");
const app = express();
const main = require("./aichat")

app.use(express.json());

app.post("/chat", async (req,res)=>{
   const {msg} = req.body;
  //  console.log(msg)
  const answer = await main(msg);
  res.send(answer);
  })



app.listen(3000, ()=>{
  console.log("listening at 3000 port")
})