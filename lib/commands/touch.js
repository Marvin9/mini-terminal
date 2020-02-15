const path = require('path');
const fs = require('fs');

const createFile = (cpath) => {
  const dir = path.dirname(cpath);
  const cpathExists = fs.existsSync(cpath);
  if (cpathExists) {
    return;
  }
  const dirExists = fs.existsSync(dir);
  if (dirExists) {
    fs.writeFileSync(cpath, '');
  } else {
    console.log('\ncannot create File: no such directory exists');
  }
};

const touch = (chunks, currPath) => {
  for (let i = 1, iBound = chunks.length; i < iBound; i++) {
    const currentChunk = chunks[i];
    const chunkPath = path.resolve(currPath, currentChunk);
    createFile(chunkPath);
  }
};

module.exports = touch;
