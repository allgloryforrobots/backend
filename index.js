const express = require('express')
const app = express()
const port = 3000
const host = 'localhost'

app.get('/', (req, res) => res.end(`
    <div>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
        <h1>Home page</h1>  
    </div>
`))

app.get('/about', (req, res) => res.end(`
    <div>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
        <h1>About page</h1>
    </div>
`))

app.listen(port, host, () => console.log(`Сервер запущен по адресу http://${host}:${port}/`))