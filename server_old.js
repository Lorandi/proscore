const customExpress = require('./config/customExpress');
const connection = require('./database/connection');
const Tables = require('./database/tables.js')

connection.connect(error =>{
  if(error){
    console.log(error)
  }else{
    console.log("database connection established  port 3306")
    Tables.init(connection)
    const app = customExpress();
    app.listen(3000, ()=> console.log("server at port 3000"))
  }
})



