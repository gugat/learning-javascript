// Solucion 1 

const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function(response){
  response.pipe(bl(function (err, data) {
    let dataString = data.toString()
    console.log(dataString.length)
    console.log(dataString)
  }))
})

// Official solution

var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})