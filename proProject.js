// The project "Calculate the Dark Matter of the universe for Nasa" requires Pros with score greater than 10
// The project "Determine if the Schrodinger's cat is alive" requires Pros with score greater than 5
// The project "Attend to users support for a YXZ Company" requires Pros with score greater than 3
// The project "Collect specific people information from their social media for XPTO Company" requires Pros with score greater than 2

const updateScore = require('./updateScore')


const proProject = (props) => { 
  const score = updateScore(props); 
  if (props.age < 18){
    return "ta fora"
  }else{
    return console.log("menor que 10")
  }
}

module.exports = proProject;
