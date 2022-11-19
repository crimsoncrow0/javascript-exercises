const ftoc = function(f) {
  let c = ((f - 32) * 5 / 9);
  return c;
};

const ctof = function(c) {
  let f = (c * 9 / 5 + 32);
  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
