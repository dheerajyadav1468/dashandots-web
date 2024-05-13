const express = require("express");
const mongoose = require("mongoose");
const cors = require( "cors" );

const authRoute = require("./routes/authRoute");
require("dotenv").config();
const { MONGO_URL, PORT } = process.env;

const app = express();

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: ["http://localhost:4000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/users", authRoute);
