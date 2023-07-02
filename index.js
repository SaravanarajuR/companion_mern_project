const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
});

server.listen("https://compannion.azurewebsites.net/", () => {
  console.log("server running");
});
