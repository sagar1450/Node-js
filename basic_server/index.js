const http=require('http');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application/json'})
resp.write(JSON.stringify({name:"sagar",age:29}));
resp.end();
}).listen(4500);