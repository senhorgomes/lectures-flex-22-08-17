//Express is a routing and middleware web framework
//It allows us to easily make http requests, and return HTTP responses
//BUT....what is middleware?
//Middleware?
const express = require("express")

const app = express()
const port = 3000;
app.set('view engine', 'ejs')
// "/hello"
app.get("/hello", (req, res) => {
    res.render("newPage")
})
app.get("/:id", (req, res) => {
    //This allows us to have conditional rendering in our pages
    res.render("newParameterPage", {params: req.params.id, userLoggedIn: true})
})
// app.get("/:url", (req, res) => {
//     res.send(`${req.params.url}`)
// })
// app.get("/:url/:id", (req, res) => {
//     res.send(`${req.params.url} and ${req.params.id}`)
// })


app.listen(port, () => {
    console.log("I am listening");
  });