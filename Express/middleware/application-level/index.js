const express = require('express')
const app = express();

const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send('Please provide age')
    } else if (req.query.age < 18) {
        resp.send('You can not access this page')
    } else {
        next();
    }
}

app.use(reqFilter)

app.get('', (req, resp) => {

    resp.send(`<h1>welcome </h1><a href='/user'>go to user page</a>`)
});

app.get('/user', (req, resp) => {
    resp.send(`welcome,this is user page  <a href='/'>go to home page</a>`)
});

app.listen(8500);