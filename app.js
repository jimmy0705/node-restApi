const express = require('express')
const parser = require('body-parser')
const app = express()
const port = 4000

app.use(parser.json())



app.get('/api/user/login', (req, res) =>{
    //console.log(req.params);

const data = [{name:"jimmy"}]

res.status(200).send(data)
}


)



app.get('/api/user/signup', (req, res) =>{
    //console.log(req.params);

const data = [{name:"jimmy"}]

res.status(200).send(data)
}


)



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))