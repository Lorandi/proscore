// check if the Education Level is one of the supported
const ValidateEducationLevel = (pro) => {
  const educationLevel = pro.education_level
  let invalid = ""

  //more Education Leval have to be add on this array
  var educationLevelArray = ['no_education', 'high_school', 'bachelors_degree_or_high'];

  if (educationLevelArray.indexOf(educationLevel) == -1) {
    console.log('Invalid Education Level. Must be "no_education", "high_school" or "bachelors_degree_or_high")')
    invalid += 'Invalid Education Level. Must be no_education, high_school or bachelors_degree_or_high '
  }
  return invalid
}

module.exports = ValidateEducationLevel