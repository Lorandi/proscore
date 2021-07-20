
const calcProScore = (pro) => {
  const educationLevel = pro.education_level
  const sales = pro.past_experiences.sales
  const support = pro.past_experiences.support
  const downloadSpeed = pro.internet_test.download_speed
  const uploadSpeed = pro.internet_test.upload_speed
  const writingScore = pro.writing_score
  const referralSode = pro.referral_code

  let score = 0

  if (educationLevel === 'no_education' || educationLevel === 'high_school' || educationLevel === 'bachelors_degree_or_high') {
    if (educationLevel === 'high_school') { score += 1 }
    if (educationLevel === 'bachelors_degree_or_high') { score += 2 }
  } else {
    console.log('treta')
  }

  if (sales) {
    score += 5
  }

  if (support) {
    score += 3
  }

  if (downloadSpeed > 50) {
    score += 1
  }

  if (downloadSpeed < 5) {
    score -= 1
  }

  if (uploadSpeed > 50) {
    score += 1
  }

  if (uploadSpeed < 5) {
    score -= 1
  }

  if (writingScore < 0.3) {
    score -= 1
  }

  if (writingScore >= 0.3 && writingScore <= 0.7) {
    score += 1
  }

  if (writingScore > 0.7) {
    score += 2
  }

  if (referralSode === 'token1234') {
    score += 1
  }
  return score
}

module.exports = calcProScore
