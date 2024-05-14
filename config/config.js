const mongoose = require("mongoose");
require("dotenv").config();

const mongoConnect = () => {
  const mongoUrl = process.env.MONGODB_URL;
  return mongoose
    .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("database connected"))
    .catch((err) => console.error("database connection error", err));
};

module.exports = { mongoConnect };
