const fs = require("fs");
const path = require("path");
const figlet = require("figlet");

fs.appendFile(path.resolve(__dirname, "ascii.txt"), figlet.textSync("Vakha", {}), (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
