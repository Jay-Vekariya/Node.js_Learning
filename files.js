const fs = require("fs");

//Reading Files..
// fs.readFile("./docs/docs.txt", (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

//writing files
// fs.writeFile("./docs/docs.txt", "Hello 45", ()=>{
//     console.log("File written");
// });

// fs.writeFile("./docs/docs_45.txt", "Hello 45", ()=>{
//     console.log("File created");
// });

//Directories
// if(!fs.existsSync("./assets")){
// fs.mkdir("./assets", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("Folder created");

// })
// } else {
//     fs.rmdir("./assets", (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("Folder deleted");
//     })
// }

//Deleting files
// if(fs.existsSync("./docs/delme.txt")){
//     fs.unlink("./docs/delme.txt", (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("File deleted");
//     })
// } 
