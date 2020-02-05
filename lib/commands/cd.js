const fs = require('fs');
const path = require('path');

const cd = (arg1, store) => {
  const chunkPath = path.resolve(store.currentPath, arg1);
  const exist = fs.existsSync(chunkPath);
  if (!exist) {
    console.log('Specified path cannot be found');
    return;
  }
  const isDir = fs.lstatSync(chunkPath).isDirectory();
  if (isDir) {
    store.addPath(arg1);
  } else {
    console.log('Directory name is invalid');
  }
};

module.exports = cd;
