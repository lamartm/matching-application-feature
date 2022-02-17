const express = require('express')
const app = express()
const port = 4000;

const dummyData = {
  name: "Mark",
  age: 20,
  likes: ["Shooters", "RPGs", "MOBAs"],
  favourite: "CS:GO",
  is: "Multiplayer gamer"
}

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("src"));

app.use((err, req, res, next) => {
  res.status(404).send('404 not found')
})

app.get('/', (req, res) => {
  res.render("about", {
    pageTitle: `about`,
  })
})

app.get('/login', (req, res) => {
  res.render("login", {
    pageTitle: `log-in`,
  })
})

app.get('/signup', (req, res) => {
  res.render("signup", {
    pageTitle: `sign-up`,
  })
})

app.get('/profile', (req, res) => {
    res.render("profile", {
      data: dummyData,
      pageTitle: `profile`,
    })
})

app.listen(port, function () {
  console.log(`Application started on port: ${port}`);
});