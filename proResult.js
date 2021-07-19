const updateScore = require('./updateScore')
const proProject = require('./proProject')

const proResult = (props) => {  
  const score = updateScore(props);
  const project = proProject(props);
  
  const proFinalResult = {
    "score": score, 
    "selected_project": project.selected_project,
    "eligible_projects":  project.eligible_projects,
    "ineligible_projects": project.ineligible_projects,
 }
  return proFinalResult;
}

module.exports = proResult;


