const proData = require('./proData.js')

function proScore() { 
  var age = proData.age;
  var education_level = proData.education_level;
  var sales = proData.past_experiences.sales;
  var support = proData.past_experiences.support;
  var download_speed = proData.internet_test.download_speed;
  var upload_speed = proData.internet_test.upload_speed;
  var writing_score = proData.writing_score;
  var referral_code = proData.referral_code;


  var score = 0;

  function updateScore() {
    if (age < 18) {
      //to do
    }

    if (education_level === "high_school") {
      score += 1;
    }

    if (education_level === "bachelors_degree_or_high") {
      score += 2
    }

    if (sales) {
      score += 5;
    }

    if (support) {
      score += 3;
    }

    if (download_speed > 50) {
      score += 1;
    }

    if (download_speed < 5) {
      score -= 1;
    }

    if (upload_speed > 50) {
      score += 1;
    }

    if (upload_speed < 5) {
      score -= 1;
    }

    if (writing_score < 0.3) {
      score -= 1;
    }

    if (writing_score >= 0.3 && writing_score <= 0.7) {
      score += 1;
    }

    if (writing_score > 0.7) {
      score += 2;
    }

    if (referral_code === "token1234") {
      score += 1;
    }    
  }
  updateScore()
  console.log("Score do candidato é " + score)
  // return console.log("Score do candidato é " + score);  
}

module.exports = proScore;
