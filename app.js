const express = require("express");

//express app
const app = express();
//port num
const port = 4000;

//listen for request
app.listen(port, ()=>{
    console.log(`Server is listing on port number ${port}`);
});
//Routes
app.get('/', (req, res)=>{
    // res.send("<h1>Home Page</h1>");
    res.sendFile("./Views/index.html", {root: __dirname});
});

app.get('/about', (req, res)=>{
    // res.send("<h1>About Page</h1>");
    res.sendFile("./Views/about.html", {root: __dirname});

});

//redirect
app.get("/about-us", (req, res)=>{
    res.redirect("./about");
});

//404 page
app.use((req, res)=>{
    // res.status(404).send("<h1>404 Page
    res.status(404),sendFile("./Views/404P.html", {root: __dirname});
})
