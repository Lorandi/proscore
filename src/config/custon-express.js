require('marko/node-require').install();
require('marko/express')

const express = require('express')
const app = express()
const server = express()
const routes = require('../app/routes/routes')



routes.app(app)
routes.server(server)

app.use(express.json())

module.exports ={
  app,
  server
}