const http = require('http')

const host = 'localhost'
const port = 3000

const server = http.createServer((request, result) => {
    if (request.url === '/') {
        result.statusCode = 200
        result.setHeader('Content-Type', 'text/plain')
        result.end('Hello World\n')
    } else {
        result.statusCode = 404
        result.setHeader('Content-Type', 'text/plain')
        result.end('Page not found \n')
    }
})

server.listen(port, host, () => {
    console.log(`Сервер запущен по адресу http://${host}:${port}/`)
})