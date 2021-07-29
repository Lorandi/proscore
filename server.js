const {app,server} = require('./src/config/custon-express')

server.listen(8080, () =>{
  console.log('server at port 8080')
})

app.listen(3000, (err) => {
  if (err) console.log(err)
  console.log('server at port 3000')
})

module.exports = app
