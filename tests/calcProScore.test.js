const calcProScore = require('../src/calcProScore')

describe('check the output of calcProScore', () => {
  test('should return the score of the pro', () => {
    const pro = {
      age: 35,
      education_level: 'high_school',
      past_experiences: {
        sales: false,
        support: true
      },
      internet_test: {
        download_speed: 50.4,
        upload_speed: 40.2
      },
      writing_score: 0.6,
      referral_code: 'token1234'
    }
    expect(calcProScore(pro)).toBe(7)
  })
})
