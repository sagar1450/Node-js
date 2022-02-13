const path=require('path')
const express =require ('express')

//render html file
const app=express();
console.log(__dirname)

const publicpath=path.join(__dirname,'public');
// app.use(express.static(publicpath));
app.get("",(req,resp)=>{
 resp.sendFile(`${publicpath}/index.html`)
})
app.get("/about",(req,resp)=>{
    resp.sendFile(`${publicpath}/about.html`)
   })
app.listen(7500)

// console.log(__dirname);