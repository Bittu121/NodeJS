//------Read a file :- fs.readFileSync(fileName)  
//const fs = require("fs");
// const result = fs.readFileSync("aboutUs.pdf");      // methode -1
// console.log(result.toString())

// const fs  = require("fs");    // method -2
// fs.readFile("aboutUs.pdf", function(err,data){
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

//----Rename a file  syntax: - fs.rename(oldname,newName,callback dunction)
// const fs = require("fs");
// fs.rename("aboutUs.pdf","contactUs.pdf",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("File renamed successfully");
// });
