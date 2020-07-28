const express = require("express");

const router = express.Router();

const info = [];

router.get("/", (req, res) => {
  res.render("admin");
});
// router.post("/", (req, res) => {
//   //res.render("adminAddEmployee");
//   res.redirect("/admin/adminAddEmployee");
// });
// router.get("/adminAddEmployee", (req, res) => {
//   res.render("adminAddEmployee");
// });

exports.routes = router;
