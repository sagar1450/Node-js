const path=require('path')
const fs=require('fs')
const dirpath=path.join(__dirname);
console.log(dirpath)

for(i=0;i<5;i++){
    fs.writeFileSync(dirpath+"/hello"+i+".txt","hello ")
}

fs.readdir(dirpath,(error,file_list)=>{
    file_list.map((item)=>{
        console.log(item)
    })

})

const arr=[4,7,5,6,9];
arr.map((item)=>{
console.log(item);
})

const arr1=[4,7,5,6,9];
arr1.forEach((item)=>{
console.log(item);
})