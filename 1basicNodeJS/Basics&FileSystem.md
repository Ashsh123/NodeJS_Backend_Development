# NodeJs Basics &  Introduction to NodeJS
> It is not a programming language, technology, framework or library. It is a JS runtime environment.

> Story : Js se backend nahi bn skta, qki js ke pass wo functionality nahi he jinse backend bnta he. Ryan Dahl isne socha ki js se backend bnna chahiye.
> google chrome ka V8 engine(jispr chrome js ke code ko run krta h) ka code open source he and ryan dahl us code me chedkhani kr raha he. qki chrome ka V8 engine bna he C++ me.
> fr usne socha ki hme toh JS me code krna h
  node = js ki layer + V8 engine
  hm JS ka code likhege jo ki (wrapper layer of JS) recieve kregi and wo code V8 engine ke C++ modules ke saath ek server create krega

> Moral of the story is NodeJS is js run time environment


# Installing NodeJS and NPM 
1. Goto Node on chrome and download it. It downloads the node and npm both. 
 -> node & NPM 
 a) npm init : It creates a package.json file. It holds the info about the which package you used in your project and also hold the script file to run your projects. Holds all the info about the projects.
 npm init -> package.json -> lekha jokha of the project

 Two types of method to use Node : a) -> CJS(Common JS) ex: const http = require('node:fs/promises') 
 b) ESM(EchmaScript Modules) ex: import * as fs from 'node:fs/promises

 There are two type of API : 
 a) Promise-based API ex:const http = require('node:fs/promises') 
b) callback and sync APIs ex: const http = require('node:fs') 
or you can also require with using node. ex :  require('fs');
 fs = file system
 
# File System
a) writeFile : syntax -> fs.writeFile(file_name,data[,option],callback)
b) readFile
c) copyFile
d) rename
e) unlink
f) mkdir
g) rmdir

    // const fs = require('fs');

// fs.writeFile("note.txt","Hey, this is a Note.txt file.",(err)=>{
//     if(err){
//         console.error(err);
//     }
//     else console.log("File Created Successfully...");
// })


    //appendFile
// fs.appendFile("note.txt","Hey, this is the data from appendFile.",(err)=>{
//     if(err){
//         console.error(err);
//     }
//     else console.log("Data Added Successfully...");
// })

    // rename
// fs.rename("note.txt","notes.txt",(err)=>{
//     if (err) {
//         console.error(err);
        
//     } else {
//         console.log("Rename Successfully...");
        
//     }
// })

    // fs.readFile("notes.txt",(data,err)=>{
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("Reading file successfully...");
//         console.log("data");
//     }
// })  // it gives output in buffered manner. To convert buffered into readable form we use 3rd agrument as 'utf-8'
// console.log(read);

     // fs.readFile("notes.txt","utf-8",(data,err)=>{
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("Reading file successfully...");
//         console.log("data");
//     }
// })

    // fs.copyFile("notes.txt","note.txt",(err)=>{   
//     err?console.error(err):console.log("Copying file successfully...");
// })

    // fs.unlink("note.txt",(err)=>{
//     err?console.error(err):console.log("Deleting file successfully...");
// })

    // This will remove the empty folder which have no file in it.
// fs.rmdir("./copy",(err)=>{
    //     err?console.error(err):console.log("Deleting file successfully...");
    // })
    
    
    // This will remove the folder and recursivly all file in it.
// fs.rmdir("./copy",{recursive:true},(err)=>{
//     err?console.error(err):console.log("Deleting file successfully...");
// })
   
    // we also use 
// fs.rm("./copy",{recursive:true},(err)=>{
//     err?console.error(err):console.log("Deleting file successfully...");
// })




 
 -> working with node and npm
 -> npm init 
 -> node basic usage

 


# Working with modules


# File system operations
# Understading HTTP module