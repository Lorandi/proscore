

var http = require('http');
var fs = require('fs');

// const { outroTeste } = require('./outroTeste.js');


http.createServer(function (req, res) {
  fs.readFile('testeHtml.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

var proData = {
  "age": 35,
  "education_level": "bachelors_degree_or_high",
  "past_experiences": {
    "sales": true, 
    "support": true, },
  "internet_test": { 
    "download_speed": 51, 
    "upload_speed": 51  },
  "writing_score": 0.8,
  "referral_code": "token1234"
}


   fs.writeFile('proData.json', JSON.stringify(proData) , function (err) {
    if (err) throw err;
    console.log('Saved!');
 })








// fs.writeFile('proData.json', JSON.stringify(proData) , function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });




