const dbconnect=require('./mongodb')

const deleteData=async()=>{
    let db=await dbconnect();
    let data= await db.deleteOne({name:"sonu"})
   
    if(data.acknowledged){
        console.log("data deleted")
    }
}

deleteData();
