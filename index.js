const http = require("http");
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/client/build/")));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen("5000", () => {
  console.log("server running");
});
