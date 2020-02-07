const fs = require('fs');
const path = require('path');

const createDirectory = (cpath, name) => {
  const pathDir = path.dirname(cpath);
  const pathName = path.basename(cpath);
  const isFile = /\w\.\w/g.test(pathName);
  const exist = fs.existsSync(cpath);

  if (exist) {
    console.log(`\nCannot create directory. '${name}' exists.`);
  } else if (!fs.existsSync(pathDir)) {
    console.log(`\nCannot create directory. '${name}' no such file or directory.`);
  } else if (!isFile) {
    fs.mkdirSync(cpath);
  } else {
    fs.writeFileSync(cpath, '');
  }
};

const mkdir = (chunks, currPath) => {
  for (let i = 1, iBound = chunks.length; i < iBound; i++) {
    const currentChunk = chunks[i];
    const chunkPath = path.resolve(currPath, currentChunk);
    createDirectory(chunkPath, currentChunk);
  }
};

module.exports = mkdir;
