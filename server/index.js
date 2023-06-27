const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
});

server.listen(5000, () => {
  console.log("server running");
});
