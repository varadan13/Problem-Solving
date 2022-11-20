const fs = require("fs");
const path = require("path");

const copyAllFiles = () => {
  const src = path.join(__dirname, "templates");
  const dest = path.join(__dirname, "workbooks");
  cleanUp(dest);
  walkAndCopy(src, dest);
};

const walkAndCopy = (src, dest) => {
  const files = fs.readdirSync(src, { withFileTypes: true });
  if (files.length === 0) return;
  files.forEach((file) => {
    if (file.isFile()) {
      fs.cpSync(path.join(src, file.name), path.join(dest, file.name));
    } else {
      walkAndCopy(path.join(src, file.name), path.join(dest, file.name));
    }
  });
};

const cleanUp = (dest) => {
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true });
    fs.mkdirSync(dest);
  } else {
    fs.mkdirSync(dest);
  }
};

module.exports = {
  copyAllFiles,
};
