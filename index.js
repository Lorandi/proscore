const data = require('./pro.json');

var age = data.age;
var education_level =  data.education_level;
var sales = data.past_experiences.sales;
var support = data.past_experiences.support;
var download_speed =  data.internet_test.download_speed;
var upload_speed = data.internet_test.upload_speed;
var writing_score =  data.writing_score;
var referral_code = data.referral_code;
var score = 0;

function updateScore(){
  if(age < 18){
    //to do
  }

  if(education_level === "high_school" ){
    score += 1;    
  }
  
  if(education_level === "bachelors_degree_or_high"){
    score += 2
  }

  if(sales){
    score += 5;
  }

  if(support){
    score += 3;
  }

  if(download_speed > 50){
    score += 1;
  }

  if(download_speed < 5){
    score -= 1;
  }

  if(upload_speed > 50){
    score += 1;
  }

  if(upload_speed < 5){
    score -= 1;
  }

  if(writing_score < 0.3){
    score -= 1;
  }

  if(writing_score >=  0.3 && writing_score <=  0.7){
    score += 1;
  }

  if( writing_score >  0.7){
    score += 2;
  }

  if(referral_code === "token1234" ){
    score += 1;
  }

  
}
updateScore()
console.log(score)


