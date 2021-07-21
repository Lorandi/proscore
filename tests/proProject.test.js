const proProject = require('../src/proProject')

describe('function to  determine the projects in which the professional can participate', () => {
  test('should return projects', () => {
    const pro = {
      age: 35,
      education_level: 'high_school',
      past_experiences: {
        sales: true,
        support: true
      },
      internet_test: {
        download_speed: 50.4,
        upload_speed: 40.2
      },
      writing_score: 0.6,
      referral_code: 'token1234'
    }
    expect(proProject(pro)).toStrictEqual(
      { eligible_projects: ['calculate_dark_matter_nasa', 'determine_schrodinger_cat_is_alive', 'support_users_from_xyz', 'collect_information_for_xpto'], ineligible_projects: [], selected_project: 'calculate_dark_matter_nasa' })
  })
})
