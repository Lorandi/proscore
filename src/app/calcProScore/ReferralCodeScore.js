// improve score if Pro has a referral code
const ReferralCodeScore = (pro) => {
  const referralCode = pro.referral_code
  let score = 0

  //more referral codes have to be add on this array
  var referralCodes = ['token1234'];

  if (referralCodes.indexOf(referralCode) != -1) {
    score += 1
  } 
  return score
}

module.exports = ReferralCodeScore