const path=require('path')
const fs=require('fs')
const dirpath=path.join(__dirname);
const filepath=`${dirpath}/apple.txt`;

//create file
fs.writeFileSync(filepath,"hello ");
fs.writeFileSync(`${dirpath}/fruit1.txt`,"hello fruit ");
fs.writeFileSync(`${dirpath}/fruit2.txt`,"hello fruit ");

//read file
fs.readFile(filepath,'utf-8',(error,item)=>{
    console.log(item)
})

//update file

fs.appendFile(filepath,"file name is apple.txt",(error)=>{
if(!error){
    console.log("file is updated")
}
})

//rename file

// fs.rename(filepath,`${dirpath}/fruit.txt`,(error)=>{
//     if(!error){
//         console.log("file is updated")
//     }
//     })

    //delete file

    fs.unlinkSync(`${dirpath}/fruit.txt`);