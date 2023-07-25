const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bp = require("body-parser");

mongoose.connect(
  "mongodb+srv://saravana1:qwertyuioplkjhgfdsa@cluster0.gdr7v46.mongodb.net/companion?retryWrites=true&w=majority"
);

app.use(bp.urlencoded({ extended: false }));

const userSchema = {
  username: String,
  password: String,
  mail: {
    type: String,
    unique: true,
  },
};
const User = new mongoose.model("User", userSchema);

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.post("/signup", (req, res) => {
  bcrypt.hash(req.body.password, 10, async (err, hashedPass) => {
    try {
      const user = new User({
        username: req.body.username,
        password: hashedPass,
        mail: req.body.mail,
      });
      user.save();
    } catch (err) {
      if (err.code === 11000) {
        res.json({ error: true, String: "Mail Id already exists" });
      } else {
        res.json({ error: true, String: "Something Gone Wrong try again" });
      }
    }
  });
});

app.post("/login", async (req, res) => {
  const response = await User.find({ mail: req.body.mail });
  console.log(response);
});

app.listen(3000, () => {
  console.log("server running");
});
