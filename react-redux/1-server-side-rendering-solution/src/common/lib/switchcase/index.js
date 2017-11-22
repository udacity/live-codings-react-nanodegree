const ifFunction = (f) => {
  if (typeof f === 'function') {
    return f();
  }
  return f;
};

const switchcaseF = cases => defaultCase => (key) => {
  if (key in cases) {
    return cases[key];
  }

  return defaultCase;
};

const switchcase = (cases = {}) => (defaultCase = {}) => (key = '') =>
  ifFunction(switchcaseF(cases)(defaultCase)(key));

export default switchcase;

