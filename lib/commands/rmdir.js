const path = require('path');
const fs = require('fs');

const removeDirectory = (dir, currPath) => {
  const dirPath = path.resolve(currPath, dir);
  const dirExists = fs.existsSync(dirPath);
  const dirBase = path.basename(dir);

  if (!dirExists) {
    console.log(`Failed to remove ${dirBase}: No such file or directory`);
    return;
  }
  const isFile = fs.lstatSync(dirPath).isFile();
  if (isFile) {
    console.log(`Failed to remove ${dirBase}: Not a directory`);
  } else {
    fs.rmdirSync(dirPath);
  }

};

const rmdir = (chunks, currPath) => {
  for (let i = 1, iBound = chunks.length; i < iBound; i++) {
    removeDirectory(chunks[i], currPath);
  }
};

module.exports = rmdir;
