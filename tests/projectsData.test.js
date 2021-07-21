const projectsData = require('../src/projectsData')

describe('keep the datas of projects and sort', () => {
  test('should return the projects', () => {
    expect(projectsData).toStrictEqual([
      { name: 'calculate_dark_matter_nasa', requires: 10 },
      { name: 'determine_schrodinger_cat_is_alive', requires: 5 },
      { name: 'support_users_from_xyz', requires: 3 },
      { name: 'collect_information_for_xpto', requires: 2 }
    ])
  })
})
