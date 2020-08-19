const express = require('express')
const parser = require('body-parser')
const app = express()
const port = 4000

app.use(parser.json())



app.get('/', (req, res) => res.send('Hello World!'))



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))