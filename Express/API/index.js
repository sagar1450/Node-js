const dbconnect=require('./dbconnect')
const mongodb=require('mongodb');
const express=require('express')
const app=express();


app.use(express.json());

app.get('/',async(req,resp)=>{
    let db=await dbconnect();
    let data=await db.find().toArray();
  resp.send(data);
})

app.post('/',async(req,resp)=>{  
    let db=await dbconnect();
    let data=await db.insertOne(req.body); //data come from postman (post data in postman)
     resp.send(data);
     console.log(data);
})

//update by name filter
app.put('/',async(req,resp)=>{  
    let db=await dbconnect();
    let data=await db.updateOne({name:req.body.name},{$set:req.body}); //data come from postman (post data in postman)
     resp.send(data);
     console.log(data);
})

//update by pass name parameter
app.put('/:name',async(req,resp)=>{  
    let db=await dbconnect();
    let data=await db.updateOne({name:req.params.name},{$set:req.body}); //data come from postman (post data in postman)
     resp.send(data);
     console.log(data);
})

app.delete('/:id',async(req,resp)=>{  
    let db=await dbconnect();
    let data=await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)}); //data come from postman (post data in postman)
     resp.send(data);
    
})

app.listen(5000);