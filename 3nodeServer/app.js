//method-1
// const http = require("http");    
// http
//   .createServer((req, res) => {
//     res.write("<h1>Bittu Kumar</h1>");
//     res.end();
//   })
//   .listen(5000);


//method-2(a)
// function dataControl(req, res) {   
//   res.write("<h1>hello this is Nodejs server</h1>");
//   res.end();
// }
// http.createServer(dataControl).listen(9000);


//method-2(b)
// const dataControl = (req, res) => {
//     res.write("<h1>hello this is Nodejs server1</h1>");
//     res.end();
//   };
//   http.createServer(dataControl).listen(9000);


//Note:-
//for packagejson :- npm init
//install package :- npm i colors // npm i packge name
// npm install :- for download npm package
//npm i nodemon for start nodemon and add
// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1",
//   "dev":"nodemon index.js"
// },


//-----------------------//
// function test(a) {
//   return a * 10;
// }

//const test = a => a * 100;