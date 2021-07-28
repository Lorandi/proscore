const express = require('express')
const app = express()
const proResult = require('./src/proResult')


app.use(express.json())
// app.use(express.static("index.html"));

// app.get('/', (req, res) => {
//   res.send('Pro Portal')
// })
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.post('/', (req, res) => {
  const pro = req.body
  res.json(proResult(pro))
})

app.listen(3000, (err) => {
  if (err) console.log(err)
  console.log('server at port 3000')
})

module.exports = app
