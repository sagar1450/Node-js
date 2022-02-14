const express=require('express');
require('./config');
const user=require('./user');

const app=express();
app.use(express.json());
app.post('/create',async(req,resp)=>{
    let data= await user.insertMany(req.body);
    // let res=await data.save();
    console.log(data);
    resp.send(data);
})

app.get('/list',async(req,resp)=>{
    let data= await user.find();
    // let res=await data.save();
    console.log(data);
    resp.send(data);
})

app.delete('/delete/:_id',async(req,resp)=>{
    let data= await user.deleteOne(req.params);
    // let res=await data.save();
    console.log(data);
    resp.send(data);
})

app.put('/update/:_id',async(req,resp)=>{
    let data= await user.updateOne(
        req.params,
        {$set:req.body});
    // let res=await data.save();
    console.log(data);
    resp.send(data);
})

//serach api

app.get('/search/:key',async(req,resp)=>{
    let data= await user.find(
        {
            "$or":[
                {name:{$regex:req.params.key}}
            ]
        }
    );
    // let res=await data.save();
    console.log(data);
    resp.send(data);
})

app.listen(5000);
