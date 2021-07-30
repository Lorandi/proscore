const validateData = require('../src/app/js/validateData/validateData')

describe('check if validateData is working', () => {
  test('should return a string if any data from front-end json is invalid', () => {
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
    expect(validateData(pro)).toBe('')
  })
})
