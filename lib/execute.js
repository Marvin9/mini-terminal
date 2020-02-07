const ls = require('./commands/ls');
const cd = require('./commands/cd');
const clear = require('./commands/clear');

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
        console.log('invalid command. try -> cd /some/path');
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
