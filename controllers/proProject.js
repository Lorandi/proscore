const calcProScore = require('./calcProScore')
const projects = require('./projectsData')

const proProject = (pro) => {
  const score = calcProScore(pro)
  let selectedProject = ''
  const eligibleProjects = []
  const ineligibleProjects = []

  if (pro.age < 18) {
    for (let i = 0; i < projects.length; i++) {
      ineligibleProjects.push(projects[i].name)
    }
  } else {
    for (let j = 0; j < projects.length; j++) {
      if (projects[j].requires < score) {
        eligibleProjects.push(projects[j].name)
      } else {
        ineligibleProjects.push(projects[j].name)
      }
    }
  }
  // projects were sorted from highest to lowest "requires" before import and that's why you can use eligible_projects[0] as selected_projec
  if (eligibleProjects && eligibleProjects.length > 0) {
    selectedProject = eligibleProjects[0]
  }

  return {
    selected_project: selectedProject,
    eligible_projects: eligibleProjects,
    ineligible_projects: ineligibleProjects
  }
}

module.exports = proProject
