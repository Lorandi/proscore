const express = require('express')
const app = express()
const proResult = require('./proResult')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Pro portal')
})
