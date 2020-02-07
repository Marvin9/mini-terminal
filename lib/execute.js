const ls = require('./commands/ls');
const cd = require('./commands/cd');
const clear = require('./commands/clear');
const mkdir = require('./commands/mkdir');

const execute = (command, store) => {
  const chunks = command.split(' ');
  const [commandName] = chunks;
  switch (commandName) {
    case 'ls': {
      ls(chunks[1] || '', store);
      break;
    }

    case 'cd': {
      if (chunks.length > 1) {
        cd(chunks[1], store);
      } else {
        console.log('\ninvalid command. try -> cd /some/path');
      }
      break;
    }

    case 'mkdir': {
      if (chunks.length === 1) {
        console.log('\ntry -> mkdir dirname1 dirname2 existed/path/dirname1');
      } else {
        mkdir(chunks, store.currentPath);
      }
      break;
    }

    case 'clear': case 'cls': {
      clear();
      break;
    }

    default:
      console.log(`Invalid command ${commandName}`);
      break;
  }
};

module.exports = execute;
