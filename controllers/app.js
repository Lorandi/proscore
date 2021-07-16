const SubmitData = require('../models/submitData');

module.exports = app => {
  app.get('/', (req, res) => res.send('realizando GET'))

  app.post('/', (req, res) => {
    const data = req.body;
    SubmitData.add(data) 
    res.send('doing POST')
  })
}