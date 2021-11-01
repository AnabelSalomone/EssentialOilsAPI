const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const oilsRoutes = require("./routes/essential_oils");

const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.NAME}:${process.env.KEY}@cluster0.bl4a7.mongodb.net/aromatherapy?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", oilsRoutes);

app.listen(PORT);
