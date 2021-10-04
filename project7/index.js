const figlet = require("figlet");

figlet(
  "IntoCode RuleT",
  {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 100,
    whitespaceBreak: true,
  },
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  }
);
