const validateData = (pro) => {
  const age = pro.age
  const educationLevel = pro.education_level
  const sales = pro.past_experiences.sales
  const support = pro.past_experiences.support
  const downloadSpeed = pro.internet_test.download_speed
  const uploadSpeed = pro.internet_test.upload_speed
  const writingScore = pro.writing_score

  let invalid = ''

  if (typeof age !== 'number' || !Number.isInteger(age) || age < 0) {
    console.log('Invalid age: Attributes aren´t a integer equal or greater than 0 ')
    invalid += 'Invalid age: Attributes aren´t a integer equal or greater than 0 .'
  }

  if (
    educationLevel !== 'no_education' &&
    educationLevel !== 'high_school' &&
    educationLevel !== 'bachelors_degree_or_high') {
    console.log('Invalid Education Level. Must be "no_education", "high_school" or "bachelors_degree_or_high")')
    invalid += 'Invalid Education Level. Must be no_education, high_school or bachelors_degree_or_high '
  }

  if (typeof sales !== 'boolean') {
    console.log('Invalid past experiences sales. Attributes aren´t boolean')
    invalid += 'Invalid past experiences sales. Attributes aren´t boolean. '
  }

  if (typeof support !== 'boolean') {
    console.log('Invalid past experiences support. Attributes aren´t boolean')
    invalid += 'Invalid past experiences support. Attributes aren´t boolean. '
  }

  if (typeof downloadSpeed !== 'number' ||
   typeof uploadSpeed !== 'number' ||
   downloadSpeed < 0 ||
   uploadSpeed < 0) {
    console.log('Invalid internet test. Attributes aren´t positive floats')
    invalid += 'Invalid internet test. Attributes aren´t positive floats. '
  }

  if (typeof writingScore !== 'number' || (writingScore < 0 || writingScore > 1)) {
    console.log('Invalid writing score. Attributes aren´t float between 0 and 1 ')
    invalid += 'Invalid writing score. Attributes aren´t float between 0 and 1. '
  }

  return invalid
}
module.exports = validateData
