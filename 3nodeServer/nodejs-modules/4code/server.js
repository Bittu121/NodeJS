//------------------Coding Challenge----------------------------------//

//Create a server to render two html pages with different content
//Use the fs module to create a main folder(public) and two subfolders(pages and css)
//Create 3 files. Two in the pages folder: home.html, and about.html
//Create a file in the css folder: style.css
//Create a server to serve the files

const http = require("http");
const fs = require("fs");
const path = require("path");

//create folders
// fs.mkdir("public/css", err => {
//   if (err) console.log(err);
//   console.log("Folder has been created");
// });

//create files
// fs.writeFile(
//   "public/pages/about.html",
//   `
// <div>
// <h1>About</h1>
// <p>This is aboutPage</p>
// </div>
// `,
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File Created");
//     }
//   }
// );

// fs.writeFile(
//   "public/css/style.css",
//   `
// <div>
// <h1>About</h1>
// <p>This is aboutPage</p>
// </div>
// `,
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File Created");
//     }
//   }
// ); 

//create server
const server = http.createServer();

//listen to the server
server.listen(8000, console.log("Server is running"));

//listen to event
server.on("request", (req, res) => {
  //get the url
  const url = req.url;
  if (url === "/") { // / means home page
    //read the file on the home.html
    fs.readFile("public/pages/home.html", function (err, data) {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }  
  //about page
  if (url === "/about") {
    //read the file on the home.html
    //get the file location
    const filePath = path.join(__dirname, "public/pages", "about.html");
    console.log(filePath);
    fs.readFile(filePath, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
});
