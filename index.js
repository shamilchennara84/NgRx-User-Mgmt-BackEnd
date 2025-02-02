const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const { mongoConnect } = require("./config/config");
require("dotenv").config();

// ====================Express Instance Setup====================

const app = express();
mongoConnect();
const PORT = process.env.PORT;

// ====================Directory Path to Different Routes====================

const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");

// ====================Application-Level Middlewares====================

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN,
  })
);

// ====================Router-Level Middlewares====================

app.use("/images", express.static(path.join(__dirname, "./images")));

// ====================ROUTES====================
app.use("/user", userRouter);
console.log("using adminRoutes");
app.use("/admin", adminRouter);

app.listen(PORT, () => console.log("Listening on port ", PORT));
