const updateScore = require('./updateScore')
const proProject = require('./proProject')

const proResult = (props) => {  
  const score = updateScore(props);
  const project = proProject(props);
  const proFinalResult = {
    "score": score, 
    "selected_project": project,
 }
  return proFinalResult;
}

module.exports = proResult;


