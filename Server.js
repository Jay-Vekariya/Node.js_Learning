const http = require('http');
const fs = require('fs');
const _ = require("lodash")

const server = http.createServer((req, res)=>{
    // console.log(req.url, req.method);
    //lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(()=>{
        console.log("hello");
    });

    //set header content type..
    res.setHeader("Content-Type", "text/html");
    // res.write('<head><link rel="styleseet" href="#" ></head>');
    // res.write("<p>Hello World</p>");
    // res.write("<p>Hello agin.. World</p>");
    // res.end();

    //set path
    let path = "./Views/";

    switch(req.url){
        case "/":
            path += "index.html";
            res.statusCode = 200; 
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/about-uss":
            res.statusCode = 301;  //moved on
            res.setHeader("Location", "/about");
            res.end();
            break;
        default:
            path += "404P.html";
            res.statusCode = 404;
            break;
    }
    
    //sent an html file
    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err.message);
            res.end();
        } else{
            res.write(data);
            res.end();
        }
    });

});

server.listen(3000, "localhost", ()=>{
    console.log("server is listing on port number 3000 .")
})