const proResult = require("../proResult");
const express = require('express')
const path = require('path');

const server = (server) =>{
  server.get("/", (req, res) => {
    res.send(`
   <html>
    <title>Server</title>
      <head>
        <meta charset="utf-8">
      </head>
      <body>
        <h1> Chegueio </h1>
      </body>
    </html>
  `);
  });
};

const app = (app) => {
  app.use(express.json())

  // app.get("/", (req, res) => {
  //   res.send("Pro Portal");
  // });
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/index.html'))
  });
  app.post("/", (req, res) => {
    const pro = req.body;
    console.log(pro);
    res.json(proResult(pro));
  });
};

module.exports = {
  server,
  app,
};
