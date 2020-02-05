const readline = require('readline');
const execute = require('./execute');
const store = require('./store');

store.currentPath = process.cwd();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const terminal = (cb) => {
  rl.question(`\n${store.currentPath}>`, cb);
};

const input = (command) => {
  if (command === 'exit') {
    rl.close();
  } else {
    execute(command, store);
    terminal(input);
  }
};

module.exports = {
  terminal,
  input,
};
