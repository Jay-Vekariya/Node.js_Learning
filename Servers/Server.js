const http = require("http");

const server = http.createServer((req, res)=>{
    console.log("request sent")
});

server.listen(3000, "localhost", ()=>{
    console.log("server is listing on port number 3000 .")
})