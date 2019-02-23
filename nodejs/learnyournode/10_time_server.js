
// My solution

const net = require('net')
const strftime = require('strftime')

const server = net.createServer(function (socket) {
  socket.write(strftime("%Y-%m-%d %H:%M") + "\n")
  socket.end()
})
server.listen(process.argv[2])

// Official solution

var net = require('net')
    
function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))

