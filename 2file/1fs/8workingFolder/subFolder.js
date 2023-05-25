//-------create subfolder-----------//
// const fs = require("fs");
// fs.mkdir('src/images',function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('folder has been created successfully');
// })

//-------create file in subfolder----//
// const fs = require("fs");
// fs.writeFile("src/index.html","Hello,welcome",function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log("File created");
// });

//------read sub older file --------//
// const fs = require("fs");
// fs.readdir('src',function(err,files){
//     if(err){
//         console.log(err);
//     }
//     console.log(files);
// })
// o/p:-[ 'css', 'images', 'index.html' ]

//--------delete folder from subfolder------//
// const fs = require("fs");
// fs.rmdir('Home',function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log("Folder deleted");
// })