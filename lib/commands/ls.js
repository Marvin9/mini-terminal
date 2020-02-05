const fs = require('fs');
const path = require('path');
const { indentation } = require('../utils');

const ls = ({ currentPath, indent, tab }) => {
  const chunkList = fs.readdirSync(currentPath);
  console.log('\n');
  chunkList.forEach((chunk) => {
    const chunkPath = path.resolve(currentPath, chunk);
    const chunkDetail = fs.lstatSync(chunkPath);
    const { size } = chunkDetail;
    const sizeTotalDigit = size.toString().length;

    console.log(`${tab}${chunkDetail.isDirectory() ? '<DIR>' : tab}${tab}${size === 0 ? indentation(indent) : size + indentation(indent - sizeTotalDigit)}${chunk}`);
  });
};

module.exports = ls;
