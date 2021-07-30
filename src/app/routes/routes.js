const proResult = require("../js/proResult");
// const path = require("path");

const app = (app) => {
  // app.get("/", (req, res) => {
  //   res.send("Pro Portal");
  // });
  app.get("/", (req, res) => {
    res.marko(require('../public/index.marko'))
    // res.sendFile(path.join(__dirname, "../../../public/index.html"));
  });
  app.post("/", (req, res) => {
    const pro = req.body;
    console.log(pro);
    res.json(proResult(pro));
  });
};

module.exports = app
