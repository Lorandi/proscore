// Project name and requires information.
// When adding new projects, it is not necessary to put them in order
// The function projectsOrder() bellow will sort them.

const projects = [
  {
    name: 'calculate_dark_matter_nasa',
    requires: 10
  },
  {
    name: 'determine_schrodinger_cat_is_alive',
    requires: 5
  },
  {
    name: 'support_users_from_xyz',
    requires: 3
  },
  {
    name: 'collect_information_for_xpto',
    requires: 2
  }
]

// sort projects from highest to lowest "requires"
function projectsOrder (arrayProjects) {
  return arrayProjects.sort(function (projectA, projectB) {
    const a = projectA.requires
    const b = projectB.requires
    return a > b ? -1 : a < b ? 1 : 0
  })
}

module.exports = projectsOrder(projects)
