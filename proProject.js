const updateScore = require('./updateScore')

const projects = require('./projectsData')

const proProject = (props) => {
  const score = updateScore(props);
  let selected_project = "";
  let eligible_projects = [];
  let ineligible_projects = [];

  if (props.age < 18) {
    for (i = 0; i < projects.length; i++) {
      ineligible_projects.push(projects[i].name)
    }
  } else {
    for (i = 0; i < projects.length; i++) {
      if (projects[i].requires < score) {
        eligible_projects.push(projects[i].name)
      }
      else {
        ineligible_projects.push(projects[i].name)
      }
    }
    //projects were sorted from highest to lowest "requires" before import and that's why you can use eligible_projects[0] as selected_projec
    if (eligible_projects && eligible_projects.length > 0) {
      selected_project = eligible_projects[0];
    }

    return {
      "selected_project": selected_project,
      "eligible_projects": eligible_projects,
      "ineligible_projects": ineligible_projects,
    }
  }
}

  module.exports = proProject;
