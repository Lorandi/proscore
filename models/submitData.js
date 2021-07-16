const connection = require('../database/connection')

class SubmitData {
  add(data){
    const sql = 'INSERT INTO ProsData SET ?'
    
    connection.query(sql, data, (error, result) =>{
      if(error){
        console.log(error)
      }else{
        console.log(result)
      }
    })
  }
}

module.exports = new SubmitData;