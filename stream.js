// const fs = require('fs')
// const http = require('http')
// const server = http.createServer()
// server.on('request', (request, response) => {
//   fs.readFile('./bigFile.txt', (error, data) => {
//     if (error) throw error
//     response.end(data)
//     console.log('done')
//     console.log(process.memoryUsage())
//   })
// })
// server.listen(8889)
// console.log(8889)


const fs = require('fs')
const http = require('http')
const server = http.createServer()
server.on('request', (request, response) => {
	const stream = fs.createReadStream('./bigFile.txt')
	stream.pipe(response)
    console.log(process.memoryUsage())
})
server.listen(8888)