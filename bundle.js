'use strict';

const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const slug = require("slug");

const dummyData = [
  {
    username: "pietje03",
    password: "post",
    name: "Mark",
    age: 20,
    likes: ["Shooters", "RPGs", "MOBAs"],
    favourite: "CS:GO",
    is: "Multiplayer gamer",
  },
];

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("src"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((err, req, res, next) => {
  res.status(404).send("404 not found");
});

app.get("/", (req, res) => {
  res.render("about", {
    pageTitle: `about`,
  });
});

app.get("/login", (req, res) => {
  res.render("login", {
    pageTitle: `log-in`,
  });
});

app.get("/signup", (req, res) => {
  res.render("signup", {
    pageTitle: `sign-up`,
  });
});

app.get("/profile/:id", (req, res) => {
  let selectedUser = dummyData.find((user) => user.username === req.params.id);
  res.render("profile", {
    data: selectedUser,
    pageTitle: `profile`,
  });
});

app.post("/login", check);
app.post("/signup", create);

app.listen(port, function () {
  console.log(`Application started on port: ${port}`);
});

function create(req, res) {
  const username = slug(req.body.username).toLowerCase();

  dummyData.push({
    username: username,
    password: req.body.password,
    name: req.body.name,
    birthday: req.body.birthday,
    likes: req.body.genre,
    email: req.body.email,
    favourite: req.body.game,
    is: req.body.type,
  });
  res.redirect("/profile/" + username);
}

function check(req, res) {
  const username = slug(req.body.username).toLowerCase();
  const checkUser = dummyData.some(
    (user) =>
      user.username === req.body.username && user.password === req.body.password
  );
  checkUser
    ? res.redirect("/profile/" + username)
    : res.status(200).send("User not found");
}
