const express = require("express");

const router = express.Router();

const profile = {
  id: "17-34208-1",
  name: "sharif",
  phone: "01632",
  gender: "male",
  designation: "employee",
};
router.get("/", function (req, res) {
  res.render("Employee");
  console.log("get");
});
router.post("/", function (req, res) {
  // res.send('post');
  if (req.body.MyProfile == "MyProfile") {
    res.redirect("/Employee/MyProfile");
  } else if (req.body.UpdateProfile == "UpdateProfile") {
    res.redirect("/Employee/UpdateProfile");
  } else {
    res.render("Employee");
  }
});

router.get("/MyProfile", function (req, res) {
  console.log("get My profile");
  res.render("employeeProfile", profile);
});
router.get("/UpdateProfile", function (req, res) {
  console.log("get My UpdateProfile");
  res.render("UpdateProfile", profile);
});

exports.routes = router;
