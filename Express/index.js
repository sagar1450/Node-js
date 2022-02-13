const express=require('express')
const app=express();
app.get('',(req,resp)=>{
    console.log("data send by browser==>",req.query.name)
    // resp.send("welcome",+req.query.name)
    resp.send(`<h1>welcome  ${req.query.name}</h1><a href='/about'>go to about page</a>`)
});

app.get('/about',(req,resp)=>{
    resp.send(`welcome,this is about page <input type="text" value=${req.query.name} <a href='/'>go to home page</a>`)
});

//ejs template

app.set('view engine','ejs')
app.get('/profile',(req,resp)=>{
    const user={
        name:"sagar",
        age:29,
        email:'sagarrathod539@gmail.com',
        skills:['java','jvavscript','Reactjs','Expressjs']
    }
    resp.render('profile',{user});
})
app.listen(6500);