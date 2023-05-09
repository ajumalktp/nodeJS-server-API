let http=require('http')
let port =8000

const server=http.createServer((req,res)=>{
    res.write("hello world")
    res.end()

})
server.listen(port,()=>console.log("server started"))