const mysql=require('mysql');

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:"users"
})

con.connect((err)=>{
    if(err){
        console.log("error")
    }else{
        console.log("connected")
    }
})

// con.query("select * from user",(err,res)=>{
//     console.log(res);
// })

module.exports=con;