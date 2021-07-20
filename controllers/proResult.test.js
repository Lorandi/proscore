const proResult = require("./proResult");

describe("final test of application", () => {
  test("should return json of projects", () => {
    const pro = {
      "age": 35,
      "education_level": "high_school",
      "past_experiences": {
        "sales": false,
        "support": true
      },
      "internet_test": {
        "download_speed": 50.4,
        "upload_speed": 40.2
      },
      "writing_score": 0.6,
      "referral_code": "token1234"
    };
    expect(proResult(pro)).toStrictEqual({
      "score": 7,
      "selected_project": "determine_schrodinger_cat_is_alive",
      "eligible_projects": [
        "determine_schrodinger_cat_is_alive",
        "support_users_from_xyz",
        "collect_information_for_xpto"
      ],
      "ineligible_projects": [
        "calculate_dark_matter_nasa"
      ]
    });
  });
});
