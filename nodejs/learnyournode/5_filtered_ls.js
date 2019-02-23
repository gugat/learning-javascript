
// My solution 

const fs = require('fs')
const path = require('path')

let directory = process.argv[2]
let extension = '.' + process.argv[3]

fs.readdir(directory, function callback(err, list){
  if (err) {
    return console.log(err)
  }

  list.forEach(function(fileBaseName){
    if (path.extname(fileBaseName) === extension){
      console.log(fileBaseName)
    }
  })
})

// Official solution

var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
