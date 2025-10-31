const path = require("path");
const fs = require("fs");
const morgan = require("morgan");

// create a write stream (in append mode)
const logStream = fs.createWriteStream(
  path.join(__dirname, "logger", "logger.txt"),
  { flags: "a" } // 'a' means append
);

// create a custom morgan format and write to file
const logger = morgan(
  (tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"), "-",
      tokens["response-time"](req, res), "ms"
    ].join(" ");
  },
  { stream: logStream } // tell morgan to write to our file
);

module.exports = logger;
