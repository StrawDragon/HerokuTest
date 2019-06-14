const express = require("express");
const path = require("path");
const EnvironmentService = require("./src/services/EnvironmentService");

const PORT = 3030;

const app = express();

app.use(express.static(path.join("./", "build")));

app.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.get("/env", (req, res, next) => {
  res.status(200).send(process.env);
});

app.listen(PORT);
console.log(`> Ready on http://localhost:${PORT}`);
