const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  res.render("admin");
});

router.post("/", function (req, res) {
  // res.send('post');
  if (req.body.addEmp == "addEmp") {
    res.redirect("/admin/addEmployee");
  } else if (req.body.allEmp == "allEmp") {
    res.redirect("/admin/allEmployeeList");
  } else {
    res.render("admin");
  }
});

router.get("/addEmployee", function (req, res) {
  res.render("addEmployee");
});

router.get("/allEmployeeList", function (req, res) {
  res.render("allEmployeeList");
});

exports.routes = router;
