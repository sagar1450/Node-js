const express=require('express');
const dotenv=require('dotenv');
const path=require('path');
const bodyparser = require("body-parser");
const connectDB = require('./server/database/connection');

const app=express();

dotenv.config({path:'config.env'});

const PORT=process.env.PORT || 8080

// mongodb connection
connectDB();
app.use(bodyparser.urlencoded({ extended : true}))

app.set('view engine','ejs')

app.use("/css",express.static(path.resolve(__dirname,"assets/css")))
app.use("/js",express.static(path.resolve(__dirname,"assets/js")))

// load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT,()=>{
    console.log(`server start at ${PORT}`)
})