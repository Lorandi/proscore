const connection = require('../database/connection')

class SubmitData {
  add(data,res){
    const sql = 'INSERT INTO ProsData SET ?'
    
    connection.query(sql, data, (error, result) =>{
      if(error){
        res.status(400).json(error)
      }else{
        res.status(201).json(result)
      }
    })
  }
}

module.exports = new SubmitData;