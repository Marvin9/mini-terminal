const path = require('path');
const { indentation } = require('./utils');

const store = {
  currentPath: process.cwd(),
  addPath(add) {
    this.currentPath = path.resolve(this.currentPath, add);
    return this;
  },
  indent: 10,
  tab: indentation(5),
};

module.exports = store;
