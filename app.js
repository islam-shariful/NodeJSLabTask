const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//to compile dynamic templates with the ejs engine
app.set("view engine", "ejs");

const login = require("./controller/login");
const admin = require("./controller/admin");
const employee = require("./controller/employee");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", admin.routes);
app.use("/login", login.routes);
app.use("/employee", employee.routes);

app.listen(3000);
