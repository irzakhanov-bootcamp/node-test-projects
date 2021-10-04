const fs = require("fs");
const path = require("path");
const figlet = require("figlet");

fs.writeFile(
  path.resolve(__dirname, "ascii.txt"),
  figlet.textSync("IntoCode RuleT", {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 100,
    whitespaceBreak: true,
  }),
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
  }
);
