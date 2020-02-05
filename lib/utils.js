const indentation = (size) => {
  let str = '';
  for (let i = 0; i < size; i++) str += ' ';
  return str;
};

module.exports = {
  indentation,
};
