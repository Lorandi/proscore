// This file receives the return from all the others files and returns
// the JSON with the result to be sent by POST by app.js.

const calcProScore = require('./calcProScore/calcProScore')
const proProject = require('./proProject')
const validateData = require('./validateData/validateData')

const proResult = (pro) => {  
  const score = calcProScore(pro) // Pro score
  const project = proProject(pro) // Projects for the Pro
  const validate = validateData(pro) // validate data
  let proFinalResult = {}

  // if any data from Pros is invalid, will enter de this "if"  
  
  if (validate !== '') {
    proFinalResult = {
      validate: validate
    }
  } else { // if no data is invalid, will enter this "else"
    proFinalResult = {
      score: score,
      selected_project: project.selected_project,
      eligible_projects: project.eligible_projects,
      ineligible_projects: project.ineligible_projects
    }
  }
  return proFinalResult
}

module.exports = proResult
