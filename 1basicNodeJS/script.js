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


