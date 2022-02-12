const http=require('http');
http.createServer((req,resp)=>{
resp.write("this is basic server");
resp.end();
}).listen(4500);