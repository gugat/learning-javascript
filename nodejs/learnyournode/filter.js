
/**
 * 6
 */

// Solution 1 

// const fs = require('fs')
// const path = require('path')

// function extensionFilter(directory, extension, callback){
//   fs.readdir(directory, function (errorReading, filesList){
//     if (errorReading) {
//       return callback(errorReading)
//     } else {
//       let filteredFiles = []
//       filesList.forEach(function(fileBaseName){
//         if (path.extname(fileBaseName) === '.' + extension){
//           filteredFiles.push(fileBaseName)
//         }
//       })
//       return callback(null, filteredFiles)
//     }
//   })
// }

// module.exports = extensionFilter


// Official solution

// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }