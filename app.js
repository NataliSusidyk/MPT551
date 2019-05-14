const express = require("express");
 
const app = express();
 
app.use("/", express.static(__dirname + "/client"));
 
app.use("/questions", express.static("server/data.json"));

app.listen(3000);

console.log("\nServer started on http://localhost:3000/");