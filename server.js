const app = require('./src/config/custon-express')

app.listen(3000, (err) => {
  if (err) console.log(err)
  console.log('server at port 3000')
})

module.exports = app
