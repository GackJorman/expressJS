const express = require("express")
const app = express()

const userRouter = require("./routes/users")
app.use("/users", userRouter)

app.listen(3000)

app.get("/", (req, res) => { // require, result
    // console.log("hello")
    // res.send("Something in here") // print
    // res.json({ data: "apple" }) // json data
    // res.download("server.js") // downloads a file
    res.render("index", { texts: "world" })
})

app.set("view engine", "ejs")

