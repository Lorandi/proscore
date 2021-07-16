class Tables{
  init(connection){
    this.connection = connection;
    this.createProData();
  }
  createProData(){
    const sql = 'CREATE TABLE IF NOT EXISTS ProData (id int AUTO_INCREMENT, age int, education_level text, PRIMARY KEY(id))'
    this.connection.query(sql, (error) =>{
      if(error){
        console.log(error)
      }else{
        console.log("ProData table created successfully")
      }
    })
  }
  
}

module.exports = new Tables;