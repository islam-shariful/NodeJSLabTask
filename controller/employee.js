const express = require("express");

const router = express.Router();

const profile = {
  name: "sharif",
  phone: "01632466063",
  Designation: "employee",
};
router.get("/", function (req, res) {
  res.render("Employee");
  console.log("get");
});
router.post("/", function (req, res) {
  // res.send('post');
  if (req.body.MyProfile == "MyProfile") {
    res.redirect("/Employee/MyProfile");
  } else {
    res.render("Employee");
  }
});

router.get("/MyProfile", function (req, res) {
  console.log("get My profile");
  res.render("employeeProfile", profile);
});

exports.routes = router;
