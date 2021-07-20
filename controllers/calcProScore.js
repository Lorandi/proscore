const calcProScore = (pro) => {
  const educationLevel = pro.education_level
  const sales = pro.past_experiences.sales
  const support = pro.past_experiences.support
  const downloadSpeed = pro.internet_test.download_speed
  const uploadSpeed = pro.internet_test.upload_speed
  const writingScore = pro.writing_score
  const referralSode = pro.referral_code

  let score = 0

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

  if (sales) score += 5

  if (support) score += 3

  switch (true) {
    case downloadSpeed > 50:
      score += 1
      break
    case downloadSpeed < 5:
      score -= 1
      break
  }
  switch (true) {
    case uploadSpeed > 50:
      score += 1
      break
    case uploadSpeed < 5:
      score -= 1
      break
  }

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

  if (referralSode === 'token1234') score += 1

  return score
}

module.exports = calcProScore
