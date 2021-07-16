class Tables{
  init(connection){
    this.connection = connection;
    this.createProsData();
  }
  createProsData(){
    const sql = 'CREATE TABLE IF NOT EXISTS ProsData (id int AUTO_INCREMENT, age int, education_level text, sales text, support text, download_speed float, upload_speed float,  writing_score float, referral_code text, PRIMARY KEY(id))'
    this.connection.query(sql, (error) =>{
      if(error){
        console.log(error)
      }else{
        console.log("ProsData table created successfully")
      }
    })
  }  
}

module.exports = new Tables;