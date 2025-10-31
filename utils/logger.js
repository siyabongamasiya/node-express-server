const path = require("path");
const fs = require("fs");
var express = require('express')
var morgan = require('morgan')
var rfs = require('rotating-file-stream') // version 2.x
var app = express()

// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log')
})


const logger = (tokens, req, res) => {
  //do something
  const logger = [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"),
    "-",
    tokens["response-time"](req, res),
    "ms",
  ].join(" ");

  fs.appendFileSync(
    path.join(__dirname, "logger", "logger.txt"),
    `${logger}\n`
  );

  return morgan(logger,{ stream: accessLogStream });
};


module.exports = logger;