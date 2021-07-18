
let pros = [];
const addProData = (event) => {
   event.preventDefault();
  let data = {
    id: Date.now(),
    age: document.getElementById('age').value,
    education_level: document.getElementById('education_level').value,
    sales: document.getElementById('sales').value,
    support: document.getElementById('support').value,
    download_speed: document.getElementById('download_speed').value,
    upload_speed: document.getElementById('upload_speed').value,
    writing_score: document.getElementById('writing_score').value,
    referral_code: document.getElementById('referral_code').value,
  }
  pros.push(data);
  document.forms[0].reset(); //to clear form

  console.warn('added', { pros });
  let pre = document.querySelector('#proJson pre');
  pre.textContent = '\n' + JSON.stringify(pros, '\t', 2)

    //saving at localStorage
  // localStorage.setItem("ProsSaved", JSON.stringify(pros)) 
  
  let proData = JSON.stringify(data)  
  module.exports = proData;
     
}

document.addEventListener('DOMContentLoaded', () => {
document.getElementById('button').addEventListener('click', addProData)
});



