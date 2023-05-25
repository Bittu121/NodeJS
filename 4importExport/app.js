//create API with static data
const http = require("http");
const data = require("./data");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application\json" }); //status 200 201  500 400 404  means? for interview
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(9000);