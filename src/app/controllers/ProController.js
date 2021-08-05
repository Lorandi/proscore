class ProController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this.age = $('#age');
    this.education_level = ($("#educationLevel"));
    this.sales = ($("#sales"));
    this.support = ($("#support"));
    this.download_speed = ($("#download_speed"));
    this.upload_speed = ($("#upload_speed"));
    this.writing_score = ($("#writing_score"));
    this.referral_code = ($("#referral_code"));
  }
  addPro(event) {
    event.preventDefault();
   
    let pro = {
      age: this.age.value,
      education_level: this.education_level.value,
      past_experiences: {
        sales: this.sales.checked,
        support: this.support.checked,
      },
      internet_test: {
        download_speed: this.download_speed.value,
        upload_speed: this.upload_speed.value
      },
      writing_score: this.writing_score.value,
      referral_code: this.referral_code.value
    };

    console.log(pro);

    let pre = document.querySelector("#msg pre");
    pre.textContent = "\n" + JSON.stringify(pro, "\t", 2);

    document.querySelector('form').reset()

    console.log("\n" + JSON.stringify(pro, "\t", 2));
    
  }
}


