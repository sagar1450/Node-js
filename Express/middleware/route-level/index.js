const express = require('express')
const app = express();
const reqFilter=require('./middleware')
const route=express.Router();

route.use(reqFilter);


// app.use(reqFilter)

app.get('', (req, resp) => {

    resp.send(`<h1>welcome </h1><a href='/user'>go to user page</a>`)
});

route.get('/user', (req, resp) => {
    resp.send(`welcome,this is user page  <a href='/'>go to home page</a>`)
});
route.get('/about', (req, resp) => {
    resp.send(`welcome,this is about page  <a href='/'>go to home page</a>`)
});
app.use('/',route);

app.listen(8500);