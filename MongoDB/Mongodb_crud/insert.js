const dbconnect=require('./mongodb')

const insert=async()=>{
    let db=await dbconnect();
    let data= await db.insertOne({name:"pillu",age:4})
   
    if(data.acknowledged){
        console.log("data inserted")
    }
}

insert();