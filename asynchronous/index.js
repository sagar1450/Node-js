//asynchronous
let a=20;
let b=0;

setTimeout(()=>{
    b=30;
})

console.log(a+b); //20 a=20 and b=0

//asynchrnous handle by promises

let writingdata=new Promise((resolve,reject)=>{
    resolve(30)
},2000)

writingdata.then((data)=>{
    b=data;
    console.log(a+b); //50
})
