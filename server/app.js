var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var bookRouter = require("./routes/books");
var usersRouter = require("./routes/users");

require("dotenv").config();

var app = express();
let corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/books", bookRouter);
app.use("/users", usersRouter);

module.exports = app;
