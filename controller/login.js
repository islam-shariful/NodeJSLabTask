const express = require("express");

const router = express.Router();

const info = [];

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", (req, res) => {
  info.push({ name: req.body.uname, password: req.body.password });
  console.log("Name: " + info[0].name);
  console.log("Password: " + info[0].password);
  res.redirect("/login");
});

exports.routes = router;
exports.info = info;
