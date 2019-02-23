
// My solution

const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const fileLocation = process.argv[3]

const server = http.createServer(function(req, res) {
  let src = fs.createReadStream(fileLocation)
  src.pipe(res)
})
server.listen(port)


// Official solution

var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
