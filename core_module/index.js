

//core_module is predefine feature in programming langauge.

//global module (not need to import)
console.log("sagar")

//non global module (need to import)
const fs=require('fs');
fs.writeFileSync("hello2.txt","sagar");
