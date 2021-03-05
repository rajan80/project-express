const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

/*app.get("/", (req, res) => {
  res.send("Hello from the web server side...");
});*/
app.post("/control-form", (req, res) => {
  let username = { email: req.body.email, name: req.body.name };

  let data = JSON.stringify(username);

  fs.writeFile("../formsubmissions/username.json", data, "utf8", (err) => {
    if (err) throw err;
    console.log("successful written");
});

res.send("Thank You");

});

app.use(express.static(path.join(__dirname, "../public")));
app.listen(3002);
