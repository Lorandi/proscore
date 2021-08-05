class ProController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._age = $('#age');
    this._education_level = ($("#educationLevel"));
    this._sales = ($("#sales"));
    this._support = ($("#support"));
    this._download_speed = ($("#download_speed"));
    this._upload_speed = ($("#upload_speed"));
    this._writing_score = ($("#writing_score"));
    this._referral_code = ($("#referral_code"));
  }
  addPro(event) {
    event.preventDefault();
   
    let pro = {
      age: this._age.value,
      education_level: this._education_level.value,
      past_experiences: {
        sales: this._sales.checked,
        support: this._support.checked,
      },
      internet_test: {
        download_speed: this._download_speed.value,
        upload_speed: this._upload_speed.value
      },
      writing_score: this._writing_score.value,
      referral_code: this._referral_code.value
    };

    console.log(pro);

    let pre = document.querySelector("#msg pre");
    pre.textContent = "\n" + JSON.stringify(pro, "\t", 2);

    document.querySelector('form').reset()

    console.log("\n" + JSON.stringify(pro, "\t", 2));
    
  }
}


