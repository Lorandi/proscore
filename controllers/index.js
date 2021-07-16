
module.exports = app => {
  app.get('/', (req, res) => res.send('realizando GET'))

  app.post('/', (req, res) => {
    console.log(req.body)
    res.send('realizando POST')
  })
}