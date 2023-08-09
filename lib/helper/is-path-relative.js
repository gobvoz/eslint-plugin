const isPathRelative = path => {
  return path.startsWith('.');
};

module.exports = isPathRelative;
