const ValidateSalesAndSupport = (pro) => {
  const sales = pro.past_experiences.sales
  const support = pro.past_experiences.support
  let invalid = ""

    // check if sales is a boolean
  if (typeof sales !== 'boolean') {
    console.log('Invalid past experiences sales. Attributes aren´t boolean')
    invalid += 'Invalid past experiences sales. Attributes aren´t boolean. '
  }

  // check if support is a boolean
  if (typeof support !== 'boolean') {
    console.log('Invalid past experiences support. Attributes aren´t boolean')
    invalid += 'Invalid past experiences support. Attributes aren´t boolean. '
  }
  return invalid
}

module.exports = ValidateSalesAndSupport