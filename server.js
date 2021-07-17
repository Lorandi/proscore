const express = require('express')
const app = express()
const fs = require('fs');
const proData = require('./proData')
const proScore = require('./proScore')


app.get('/', (req, res) => {
  fs.readFile('index.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
})

app.post('/', (req, res) => {
  fs.writeFile('proData.json', JSON.stringify(proData), function (err) {
    if (err) throw err;
    console.log('Saved!');
    res.send("Posted")
    proScore()
    return res.end();
  });
});

app.listen(3000, () => console.log("server at port 3000"))

