const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/sagar");
 const UserSchema=new mongoose.Schema({
     name:String,
     age:Number

 })
// const main=()=>{ 
//  const users=mongoose.model('users',UserSchema);
//  let data= users.insertMany([{name:"sagar",age:29},{name:"dilip",age:32}]).then(function(){
//     console.log("Data inserted")  // Success;
// //  let resp=await data.save();
// //  console.log(resp);
// })
// }
const main=async()=>{ 
    const users=mongoose.model('users',UserSchema);
    let data= await users.insertMany([{name:"sagar",age:29},{name:"dilip",age:32}]);
   //  let resp=await data.save();
    console.log(data);
   
   }
   
main();

const update=async()=>{
    const user=mongoose.model('users',UserSchema);
    let data=await user.updateOne({name:"sagar"},
    {$set:{age:16,name:"sonu"}})
    console.log(data);
}

//  update();

const deleteData=async()=>{
    const user=mongoose.model('users',UserSchema);
    let data=await user.deleteOne({name:"sagar"})
    console.log(data);
}

// deleteData();

const findData=async()=>{
    const user=mongoose.model('users',UserSchema);
    let data=await user.find();
    console.log(data);
}

