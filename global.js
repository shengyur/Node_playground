const path = require('path')

console.log(path.posix.join(process.cwd(),'./index.js'))

console.log(path.win32.join(process.cwd(),'./index.js'))
