class ProController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this.age = ($('#age')).value;
    this.education_level = ($("#educationLevel")).value;
    this.sales = ($("#sales")).checked;
    this.support = ($("#support")).checked;
    this.download_speed = ($("#download_speed")).value;
    this.upload_speed = ($("#upload_speed")).value;
    this.writing_score = ($("#writing_score")).value;
    this.referral_code = ($("#referral_code")).value;
  }
  addPro(event) {
    event.preventDefault();
    let pro = {
      age: age,
      education_level: this.education_level,
      past_experiences: {
        sales: this.sales,
        support: this.support,
      },
      internet_test: {
        download_speed: this.download_speed,
        upload_speed: this.upload_speed
      },
      writing_score: this.writing_score,
      referral_code: this.referral_code
    };

    console.log(pro);

    let pre = document.querySelector("#msg pre");
    pre.textContent = "\n" + JSON.stringify(pro, "\t", 2);

    document.querySelector('form').reset()

    console.log("\n" + JSON.stringify(pro, "\t", 2));
  }
}


