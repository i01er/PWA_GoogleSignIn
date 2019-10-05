const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//create a server object:
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080);
