// My solution

var filterModule = require('./filter.js') 
const directory = process.argv[2]
const extension = process.argv[3]

function logFiles(filesList) {
  filesList.forEach(file => {
    console.log(file)
  });
}

filterModule(directory, extension, function(err, data){
  logFiles(data)
})

// Official solution

var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})
