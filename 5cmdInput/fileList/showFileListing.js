/*
show file List
1.makes files in a folder
2.Use path module
3.Get file names and print
4. Interview Question

//method-1
const fs = require("fs"); 
fs.writeFileSync("mango.txt", "this is a mango file ");

*/

//method-2
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");
// console.warn(dirPath); // get file or directory path
// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(`hello${i}.txt`, "a simple test file");  //approach-1
//   //fs.writeFileSync(dirPath + "/hello" + i + ".txt", "a simple test file");
// }



// fs.readdir(dirPath, (err, files) => {
// console.warn(files); //multiple file in array
// }


//   files.forEach(item => {
//     //for single file get then use
//     //console.log(item);
//     console.log("file name is", item);
//   });

