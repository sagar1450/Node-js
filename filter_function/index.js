const arr=[2,4,5,6,9];
arr.filter((item)=>{
    console.log(item);
})

const arr1=[2,4,5,6,9];
let res=arr.filter((item)=>{
    return item===2;
})
console.log(res);