const http=require('http')


const server=http.createServer((req,res)=>{
   if(req.url=='/'){
       res.end("welcome to home page");
   }
   if(req.url=='/about'){
       res.end('here is our short story')
   }
   res.end(`
 <h1>OOps</h1>

 <p> we cant find that page</p>

 <a href="/">back home</a>
   `)

})
server.listen(5003)
    // echo \"Error: no test specified\" && exit 1
