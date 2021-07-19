// The project "Calculate the Dark Matter of the universe for Nasa" requires Pros with score greater than 10
// The project "Determine if the Schrodinger's cat is alive" requires Pros with score greater than 5
// The project "Attend to users support for a YXZ Company" requires Pros with score greater than 3
// The project "Collect specific people information from their social media for XPTO Company" requires Pros with score greater than 2
 
 const projects = [
  {
    name: "calculate_dark_matter_nasa",
    requires: 10
  },
  {
    name: "determine_schrodinger_cat_is_alive",
    requires: 5
  },
  {
    name: "support_users_from_xyz",
    requires: 3
  },
  {
    name: "collect_information_for_xpto",
    requires: 2
  }    
]

//order the projects from the highest requires to the lowest
function projectsOrder(arrayProjects){
  return arrayProjects.sort(function(projectA,projectB) {
    a = projectA.requires
    b = projectB.requires
    return a > b ? -1 : a < b ? 1 : 0;
  })
}

module.exports = projectsOrder(projects);

