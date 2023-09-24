
const express = require('express')
const app = express()
const port = 3000


var bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  
  res.send(`you enter the value ${req.query.name}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get('/head', (req, res) => {
  
  console.log(req.body.value)
  res.send(req.body.value)
})
