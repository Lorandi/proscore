// The purpose of this file is to validate the data that arrives from the
// frontend and verify if it is in agreement with what the application needs.
// If any data is in disagreement, a message appears in the terminal
// (console.log("") and also in the program that is running the API.

const ValidateAge = require('./ValidateAge')
const ValidateEducationLevel = require('./ValidateEducationLevel')
const ValidateSalesAndSupport = require('./ValidateSalesAndSupport')
const ValidateInternet = require('./ValidateInternet')
const WritingScore = require('./ValidateWritingScore')

const validateData = (pro) => { // "pro" cames from req.body   
  let invalid = (""
    + ValidateAge(pro)
    + ValidateEducationLevel(pro)
    + ValidateSalesAndSupport(pro)
    + ValidateInternet(pro)
    + WritingScore(pro)
    // as referral code is not required it is not checked here
  )  
  return invalid
}
module.exports = validateData
