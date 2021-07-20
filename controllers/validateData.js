const validateData = (pro) => {
  const educationLevel = pro.education_level;
  const sales = pro.past_experiences.sales;
  const support = pro.past_experiences.support;
  const downloadSpeed = pro.internet_test.download_speed;
  const uploadSpeed = pro.internet_test.upload_speed;
  const writingScore = pro.writing_score;  

  let invalid = "";

  if(
    educationLevel !== "no_education" && 
    educationLevel !== "high_school" && 
    educationLevel !== "bachelors_degree_or_high"){
    console.log("Invalid Education Level")
    invalid += "Invalid Education Level. "    
  }

  if (typeof sales !== 'boolean'){    
    console.log("Invalid past experiences sales. Parameters must be boolean")
    invalid += "Invalid past experiences sales. Parameters must be boolean. "
  }

  if (typeof support !== 'boolean'){    
    console.log("Invalid past experiences support. Parameters must be boolean")
    invalid += "Invalid past experiences support. Parameters must be boolean. "
  }

  if (typeof downloadSpeed !== 'number' || typeof uploadSpeed !== 'number'){
    console.log("Invalid internet test. Parameters must be a number")
    invalid += "Invalid internet test. Parameters must be a number. "
  } 
  
  if (typeof writingScore !== 'number' || (writingScore < 0 || writingScore > 1)) {  
    console.log("Invalid writing score. Parameters must be a float between 0 and 1 ")
    invalid += "Invalid writing score. Parameters must be a float between 0 and 1. "
  }

  return invalid;
}
module.exports = validateData;
