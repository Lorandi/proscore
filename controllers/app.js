const express = require('express')
const app = express()
const proResult = require('./proResult')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Pro portal')
})

app.post('/', (req, res) => {
  const pro = req.body
  res.json(proResult(pro))
})

module.exports = app
