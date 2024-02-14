const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("Social Media Rest Api!!!")
})


app.listen(3000, () => {
    console.log("App is running");
})