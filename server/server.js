const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const URI = process.env.ATLAS_DB;
mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });

const addListing = require("./routes/addListing");
app.use("/addListing", addListing);

const logIn = require("./routes/logIn");
app.use("/logIn", logIn);

const signUp = require("./routes/signUp");
app.use("/signUp", signUp);

app.listen(port, () => console.log("App is listening..."));
