const http = require("http");

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);

    //set header to the browser..
    res.setHeader("Content-Type", "text/html");
    res.write('<head><link rel="styleseet" href="#" ></head>');
    res.write("<p>Hello World</p>");
    res.write("<p>Hello agin.. World</p>");
    res.end();
});

server.listen(3000, "localhost", ()=>{
    console.log("server is listing on port number 3000 .")
})