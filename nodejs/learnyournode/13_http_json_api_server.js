
// My solution

 const http = require('http')
 const urlPkg = require('url')
 
 function detailedTime(date){
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
 }

 function unixTime(date){
  return {
    unixtime: date.getTime()
  }
 }

 const server = http.createServer( function(request, response) {
  if(request.method === 'GET'){
    let urlInfo = urlPkg.parse(request.url, true) // 'true' to parse query string
    let pathname = urlInfo.pathname
    let date = new Date(urlInfo.query.iso)
    let response_object = undefined

    if (pathname === '/api/parsetime') {
      response_object = detailedTime(date)

    } else if (pathname === '/api/unixtime' ) {
      response_object = unixTime(date)
    }

    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(response_object))
  }
 })

 server.listen(process.argv[2])


// Official solution

var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))