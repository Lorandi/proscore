const calcProScore = require('./calcProScore')
const proProject = require('./proProject')

const proResult = (pro) => {
  const score = calcProScore(pro)
  const project = proProject(pro)

  const proFinalResult = {
    score: score,
    selected_project: project.selected_project,
    eligible_projects: project.eligible_projects,
    ineligible_projects: project.ineligible_projects
  }
  return proFinalResult
}

module.exports = proResult
