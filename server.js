const express = require('express')
const app = express()
var config = require('./config');

app.listen(4002, (req, res) => {
  console.log('Server listening on 4002')
})

app.get('/testFB', (req, res) => {
  console.log('got xhr')
})