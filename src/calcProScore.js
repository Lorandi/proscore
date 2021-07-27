// The purpose of this file is to calculate the score of the Pros, receiving the
// information that came from the frontend after having been validated by
//* *validateData.js**

const EducationLevelScore = require('./calcProScore/EducationLevel')
const SalesAndSupportScore = require('./calcProScore/SalesAndSupportScore')
const InternetScore = require('./calcProScore/InternetScore')
const WritingScore = require('./calcProScore/WritingScore')
const ReferralCodeScore = require('./calcProScore/ReferralCodeScore')


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
