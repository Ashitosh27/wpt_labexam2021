const express=require("express");
const app=express();
app.use(express.json());

const cors=require("cors");
app.use(cors());

const {addmessage, showMessages}=require("./1");

app.post("/add-msg",async (req,res)=>{
    const msg=req.body;
    await addmessage(msg);
    res.json({Data_adding:"Success!!"});
})

app.get("/msg",async (req,res)=>{
    const list=await showMessages();
    res.json(list);
})


app.listen((4000),()=>console.log("server started...!"));