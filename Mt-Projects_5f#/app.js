const express = require("express");
const morgan = require("morgan")
// to connect & interact with the database
const mongoose = require("mongoose");
const Blog = require("./Models/Blog"); 

//express app
const app = express();

//connect to mongodb.
const DB_URL = "mongodb+srv://JayV:Hukj%40171@cluster0.zxlzk3p.mongodb.net/Nodejs?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(DB_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=> 
    app.listen(4000))
.catch((err)=>console.error(err));

//middleware & static file
app.use(express.static("Public"));
app.use(express.urlencoded({extended:true})); //return all flieds in req object.
app.use(morgan("dev"))

/*
app.get('/add-blog', (req, res)=>{
    const blog = new Blog({
        title:"New Blog 2",
        snippet:"heloo, hii",
        body:"first data"
    });    
    blog.save()
    .then((result)=>{
        res.send(result)
    })    
    .catch((err)=>{
        console.log(err);
    }); 
})  

app.get("/all-blogs",(req, res) =>{
    Blog.find()  // it goes out & get all of them 
    .then((result)=>{
        res.send((result))
    })
    .catch((err)=>{
        console.log(err);
    });
});

app.get("/single-blog", (req, res)=>{
    Blog.findById("66793a935fe7f5ff8919973c")
    .then((result)=>{
        res.send((result))
    })
    .catch((err)=>{
        console.log(err);
    }); 
});
*/

//register view engine
app.set("view engine", "ejs"); 


//Routes
app.get('/', (req, res)=>{
    res.redirect('./blogs');

    // const blogs = [
    //     {title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur"},
    //     {title: "Mario finds stars", snippet: "Lorem ipsum dolor sit amet consectetur"},
    //     {title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur"}
    // ];

    // res.send("<h1>Home Page</h1>"); 
    // res.sendFile("./Views/index.html", {root: __dirname});
    
    // res.render("index", {title:"Index", blogs}); 
        //The res.render() method in JavaScript is typically used in web development frameworks like Express.js. It is responsible for rendering a specified view template and sending the rendered HTML back to the client.
});

app.get('/about', (req, res)=>{
    // res.send("<h1>About Page</h1>");
    // res.sendFile("./Views/about.html", {root: __dirname});
    res.render("about", {title:"About"});
});

//blog routes
app.get('/blogs', (req, res)=>{
 Blog.find().sort({createdAt: -1})
 .then( (result) =>{
    res.render('index', {title: "All Blogs", blogs: result})
 }).catch((err)=>{
    console.log(err);
 })
});

app.post('/blogs', (req, res)=>{
    const blog = new Blog(req.body);    
    blog.save()
    .then((result)=>{
        res.redirect("/blogs")
    })
    .catch((err)=>{
        console.log(err);
    })
});

app.get("/blogs/:id", (req, res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then(result=>{
        res.render("Details", {blog: result, title: "Blog Details"});
    })
    .catch(err=>{
        console.log(err);
    })
})

app.delete('/blogs/:id', (req, res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect:"/blogs"})
    })
    .catch((err)=>{
        console.log(err);
    })
})


app.get("/about/create", (req, res)=>{
    res.render("create", {title:"Create"});

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
