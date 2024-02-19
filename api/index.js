const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv")
const authRoute = require('./routes/auth')
const cookieParser = require("cookie-parser")
const userRoute = require("./routes/users")
const {errorHandler} = require("./middlewares/error")


dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)


app.use(errorHandler)

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('MongoBD is connected');
}).catch((err) => {
    console.log(err);
});

app.listen(3000, () => {
    console.log("App is running");
});