const fs = require('fs');
const path = require('path');
const { indentation } = require('../utils');

const ls = (chunks, { currentPath, indent, tab }) => {
  let chunkList;
  let cpath = currentPath;

  if (chunks !== '') {
    const chunkPath = path.resolve(currentPath, chunks);
    const pathExist = fs.existsSync(chunkPath);
    if (pathExist) {
      chunkList = fs.readdirSync(chunkPath);
      cpath = chunkPath;
    } else {
      console.log(`\npath : ${chunkPath}\nAbove path does not exist`);
      return;
    }
  } else {
    chunkList = fs.readdirSync(cpath);
  }
  console.log('\n');
  chunkList.forEach((chunk) => {
    const chunkPath = path.resolve(cpath, chunk);
    const chunkDetail = fs.lstatSync(chunkPath);
    const { size } = chunkDetail;
    const sizeTotalDigit = size.toString().length;

    console.log(`${tab}${chunkDetail.isDirectory() ? '<DIR>' : tab}${tab}${size === 0 ? indentation(indent) : size + indentation(indent - sizeTotalDigit)}${chunk}`);
  });
};

module.exports = ls;
