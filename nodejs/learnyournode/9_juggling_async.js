

// My solution 

const http = require('http')
const bl = require('bl')


function getRequest(url, index){
  http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
      if (err) { 
        return console.error(err) 
      }

      responses[index] = data.toString()
      count++

      /**
       *  Don't use responses.length to know the N requests finished.
       *  
       *  Remeber `Array.length` doesn't indicate the number of defined values, 
       *  it returns the last index used plus one.
       *  
       *  Example:
       *  
       *  var a = []
       *  a[3] = "hola"
       *  a.length // 4
       *  
       *  The last index used is 3, so Array.length is 4.
       * 
       *  Use a counter instead.
       */

      if (count === maxRequests){    
        responses.forEach(response => { console.log(response) })
      }
    }))
  })
}


// Official solution

let urls = process.argv.slice(2)
let responses = []
var count = 0
const maxRequests = urls.length

urls.forEach( (url, index) => {
  getRequest(url, index)
})

Official solution

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}