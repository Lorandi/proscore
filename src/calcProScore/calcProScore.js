// The purpose of this file is to calculate the score of the Pros, receiving the
// information that came from the frontend after having been validated by
//* *validateData.js**

const EducationLevelScore = require('./EducationLevelScore')
const SalesAndSupportScore = require('./SalesAndSupportScore')
const InternetScore = require('./InternetScore')
const WritingScore = require('./WritingScore')
const ReferralCodeScore = require('./ReferralCodeScore')

const calcProScore = (pro) => {
    let score = (0
    + EducationLevelScore(pro)
    + SalesAndSupportScore(pro)
    + InternetScore(pro)
    + WritingScore(pro)
    + ReferralCodeScore(pro)
  )
  return score
}

module.exports = calcProScore
