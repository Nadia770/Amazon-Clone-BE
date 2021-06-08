const express = require("express");
const app = express();
const apiRouter = require("./Router/apiRouter");

app.use("/api", apiRouter);

module.exports = app;
