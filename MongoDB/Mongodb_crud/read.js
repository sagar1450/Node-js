const dbconnect=require('./mongodb')
//read data from monodb
const main=async()=>{
 let db=await dbconnect();
 let data=await db.find().toArray();
 console.log(data);
}

main();
