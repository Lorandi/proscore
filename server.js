const customExpress = require('./config/customExpress');
const connection = require('./database/connection');

connection.connect(error =>{
  if(error){
    console.log(error)
  }else{
    console.log("database connection established  porta 3306")
    const app = customExpress();
    app.listen(3000, ()=> console.log("server at port 3000"))
  }
})



