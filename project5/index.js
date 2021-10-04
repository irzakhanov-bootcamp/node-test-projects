const fs = require("fs");

const path = require("path");

fs.readFile(path.resolve(__dirname, "test.txt"), (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data.toString());
});
