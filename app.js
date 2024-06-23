const express = require("express");

//express app
const app = express();

//register view engine
app.set("view engine", "ejs"); 

//port num
const port = 4000;

//listen for request
app.listen(port, ()=>{
    console.log(`Server is listing on port number ${port}`);
});
//Routes
app.get('/', (req, res)=>{
    const blogs = [
        {title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur"},
        {title: "Mario finds stars", snippet: "Lorem ipsum dolor sit amet consectetur"},
        {title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur"}
    ];
    // res.send("<h1>Home Page</h1>"); 
    // res.sendFile("./Views/index.html", {root: __dirname});
    res.render("index", {title:"Jay", blogs}); 
    //The res.render() method in JavaScript is typically used in web development frameworks like Express.js. It is responsible for rendering a specified view template and sending the rendered HTML back to the client.
});

app.get('/about', (req, res)=>{
    // res.send("<h1>About Page</h1>");
    // res.sendFile("./Views/about.html", {root: __dirname});
    res.render("about");
});

app.get("/about/create", (req, res)=>{
    res.render("create");

})

//redirect
// app.get("/about-us", (req, res)=>{
//     res.redirect("./about");
// });

//404 page
app.use((req, res)=>{
    // res.status(404).send("<h1>404 Page
    // res.status(404),sendFile("./Views/404P.html", {root: __dirname});
    res.status(404).render("404P")
})
