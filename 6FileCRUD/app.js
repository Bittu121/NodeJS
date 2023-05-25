//CRUD with file system
//6. Interview question :- Buffer means tempory memory location

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
console.log(dirPath)
const filePath = `${dirPath}/apple.txt`;

// //1.Make File
fs.writeFileSync(filePath, "this is a simple file");

//2.Read File
fs.readFile(filePath, "Utf8", (err, item) => {
  console.log(item); //o/p :-this is a simple file
});

//3.Update file
fs.appendFile(filePath, "and file name is apple.txt", err => {
if (err) console.log("file is updated");
});

//4.Rename file
fs.rename(filePath, `${dirPath}/mango.txt`, err => {
 console.log("file name is updated");
});

//5.Delete file
//fs.unlinkSync(`${dirPath}/mango.txt`);