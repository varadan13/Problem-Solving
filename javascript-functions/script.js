const { Command } = require("commander");
const { copyAllFiles } = require("./script.util.js");

const program = new Command();

program
  .name("get new work books")
  .description(
    "gets new work books to practise from the workbook template folder"
  )
  .version("1.0.0");

program.command("getworkbooks").action(() => {
  copyAllFiles();
  setTimeout(() => {
    console.log("created new workbooks");
    console.log("SUCCESS");
  }, 3000);
});

program.parse();
