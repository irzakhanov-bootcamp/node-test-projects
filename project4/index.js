const fs = require("fs");

const path = require("path");

fs.writeFile(path.resolve(__dirname, "test.txt"), "Hello test", (err) => {
  if (err) {
    console.log(err);
  }
});
