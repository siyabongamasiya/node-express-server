require("dotenv").config();
const express = require("express");

const cors = require("cors");
const app = express();
const logger = require("./utils/logger");

// app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app running on port http://localhost:${port} `);
});
