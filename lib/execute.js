const ls = require('./commands/ls');
const cd = require('./commands/cd');
const clear = require('./commands/clear');
const mkdir = require('./commands/mkdir');
const rmdir = require('./commands/rmdir');
const touch = require('./commands/touch');

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

    case 'rmdir': {
      if (chunks.length === 1) {
        console.log('\ntry -> rmdir emptydir1 emptydir2');
      } else {
        rmdir(chunks, store.currentPath);
      }
      break;
    }

    case 'touch': {
      if (chunks.length === 1) {
        console.log('\ntry -> touch a.txt b.any');
      } else {
        touch(chunks, store.currentPath);
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
