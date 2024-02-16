const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv")
const authRoute = require('./routes/auth')
const cookieParser = require("cookie-parser")


dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute)

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('MongoBD is connected');
}).catch((err) => {
    console.log(err);
});

app.listen(3000, () => {
    console.log("App is running");
});