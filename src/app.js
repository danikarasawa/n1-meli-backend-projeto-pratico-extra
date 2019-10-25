const express = require("express")
const app = express()

const index = require("./routes/index")
const moviesR = require("./routes/moviesRoutes")

app.use("*", function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use("/", index)
app.use("/movies", moviesR)

module.exports = app