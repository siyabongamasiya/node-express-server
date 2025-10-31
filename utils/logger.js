var morgan = require('morgan')
var path = require('path')
var rfs = require('rotating-file-stream')

// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', 
  path: path.join(__dirname, '../logger')
})


const internalLogs = morgan('combined', { stream: accessLogStream })
const externalLogs = morgan('dev')

module.exports = [internalLogs,externalLogs]