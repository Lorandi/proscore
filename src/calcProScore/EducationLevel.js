// improve or keep the same score according to the education level
const EducationLevelScore = (pro) =>{
  let score = 0
  const educationLevel = pro.education_level
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
  return score;
}


module.exports = EducationLevelScore