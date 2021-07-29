// check if writing score is a positive number (float) smaller or equal to 1
const WritingScore = (pro) => {
  const writingScore = pro.writing_score
  let invalid =""

  if (typeof writingScore !== 'number' || (writingScore < 0 || writingScore > 1)) {
    console.log('Invalid writing score. Attributes aren´t float between 0 and 1 ')
    invalid += 'Invalid writing score. Attributes aren´t float between 0 and 1. '
  }
  return invalid
}
module.exports = WritingScore