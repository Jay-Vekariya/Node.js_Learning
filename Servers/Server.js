const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    // console.log(req.url, req.method);

    //set header content type..
    res.setHeader("Content-Type", "text/html");
    // res.write('<head><link rel="styleseet" href="#" ></head>');
    // res.write("<p>Hello World</p>");
    // res.write("<p>Hello agin.. World</p>");
    // res.end();

    //sent an html file
    fs.readFile("./index.html", (err, data)=>{
        if(err){
            console.log(err.message);
            res.end();
        } else{
            // res.write(data);
            res.end(data);
        }
    });

});

server.listen(3000, "localhost", ()=>{
    console.log("server is listing on port number 3000 .")
})