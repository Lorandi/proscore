const data = require('./pro.json');

var str = '{"age":35,"education_level":"bachelors_degree_or_high","past_experiences":{"sales":true,"support":true},"internet_test":{"download_speed":51,"upload_speed":51},"writing_score":0.8,"referral_code":"token1234"}'
var objeto = JSON.parse(str);
var objeto2 = JSON.stringify(data);

console.log( data);
console.log(str);
console.log( objeto);
console.log(objeto2);