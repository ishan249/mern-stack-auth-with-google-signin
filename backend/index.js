const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const PORT = 8000;

app.use(
  cors({
    credentials:true,
    origin: ["https://mern-auth-app-54ai.onrender.com"],
  })
);

app.set('trust proxy', 1);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", require("./routes/authRoutes"));
const MONGOOSE_URL = process.env.MONGOOSE_URL;

mongoose
  .connect(MONGOOSE_URL, { useNewUrlParser: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Database connected and Server is running at port ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });


  // export default app;