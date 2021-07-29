//set score according to internet_test.

const InternetScore = (pro) => {
  const downloadSpeed = pro.internet_test.download_speed
  const uploadSpeed = pro.internet_test.upload_speed
  let score = 0
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
  return score
}

module.exports = InternetScore