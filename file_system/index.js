const fs=require('fs');
//input from command line

const input=process.argv  //(process is object)

fs.writeFileSync(input[2],input[3]);

if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}else{
    console.log('invalid input')
}
console.log(input);
