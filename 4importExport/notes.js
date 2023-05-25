/*lib.js
function sum(a,b){
    return a+b;
}
exports.sum = sum;


const lib=require('./import/lib')
console.log(lib.sum(2,4));


const fs = require("fs");
fs.readFile("demo.txt", "utf-8", (txt) => {
  console.log(txt);
});
----------------------------------------------

app.js
//export concept-1
module.exports = {
    x: 10,
    y: 20,
    z: function () {
      return 10;
    },
  };

  index.js
  //import concept 1
const app = require("./app");
//console.log(app.x);
// console.log(app);
// console.log(app.z);
----------------------------------------------


*/
