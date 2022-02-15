const express=require('express');
const con=require('./config');

const app=express();

app.use(express.json());

app.get('/',(req,resp)=>{
    con.query("select * from user",(err,res)=>{
            console.log(res);
            resp.send(res);
         })
    
})

app.post('/',(req,resp)=>{
    const data=req.body; //dynamic data come from postman
    // const data={name:"dilip",age:32} //static data
    con.query("INSERT INTO user SET?",data,(err,res,fields)=>{
            console.log(res);
            resp.send(res);
         })
    
})

//for static data
app.put('/',(req,resp)=>{
    // const data=req.body; //dynamic data come from postman
    const data=["Golu",2] //static data
    con.query("UPDATE user SET name=? where id=?",data,(err,res,fields)=>{
            console.log(res);
            resp.send(res);
         })
    
})

//for dynamic data
app.put('/:id',(req,resp)=>{
    const data=[req.body.name,req.params.id] //dynamic data come from postman
    // const data=["Golu",2] //static data
    con.query("UPDATE user SET name=? where id=?",data,(err,res,fields)=>{
            console.log(res);
            resp.send(res);
         })
    
})

app.delete('/:id',(req,resp)=>{    
   
    con.query("DELETE FROM user where id=" + req.params.id,(err,res,fields)=>{
            console.log(res);
            resp.send(res);
         })
    
})

app.listen(5000);