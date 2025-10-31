// const path = require("path");
// const fs = require("fs");
// const morgan = require("morgan");


// const logger = (tokens, req, res) => {
//   //do something
//   const logger = [
//     tokens.method(req, res),
//     tokens.url(req, res),
//     tokens.status(req, res),
//     tokens.res(req, res, "content-length"),
//     "-",
//     tokens["response-time"](req, res),
//     "ms",
//   ].join(" ");

//   fs.appendFileSync(
//     path.join(__dirname, "logger", "logger.txt"),
//     `${logger}\n`
//   );

//   return morgan(logger);
// };


// module.exports = logger;