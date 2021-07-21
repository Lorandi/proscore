// The purpose of this file is to calculate the score of the Pros, receiving the
// information that came from the frontend after having been validated by
//* *validateData.js**

const calcProScore = (pro) => {
  const educationLevel = pro.education_level
  const sales = pro.past_experiences.sales
  const support = pro.past_experiences.support
  const downloadSpeed = pro.internet_test.download_speed
  const uploadSpeed = pro.internet_test.upload_speed
  const writingScore = pro.writing_score
  const referralSode = pro.referral_code

  let score = 0

  // improve or keep the same score according to the education level
  switch (educationLevel) {
    case 'no_education':
      break
    case 'high_school':
      score += 1
      break
    case 'bachelors_degree_or_high':
      score += 2
      break
  }

  // improve score if Pro has past expirience on sales
  if (sales) score += 5

  // improve score if Pro has past expirience on support
  if (support) score += 3

  // improve, keep the same or deducted score point according to the download speed
  switch (true) {
    case downloadSpeed > 50:
      score += 1
      break
    case downloadSpeed < 5:
      score -= 1
      break
  }
  // improve, keep the same or deducted score point according to the upload speed
  switch (true) {
    case uploadSpeed > 50:
      score += 1
      break
    case uploadSpeed < 5:
      score -= 1
      break
  }

  // improve or deducted score point according to the writing score
  switch (true) {
    case writingScore < 0.3:
      score -= 1
      break
    case writingScore > 0.7:
      score += 2
      break
    default:
      score += 1
      break
  }

  // improve score if Pro has a referral code
  if (referralSode === 'token1234') score += 1

  return score
}

module.exports = calcProScore
