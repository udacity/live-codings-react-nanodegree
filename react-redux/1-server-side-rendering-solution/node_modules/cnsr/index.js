function masker(obj, maskable) {
  // iterate maskable objects for replacing
  // characters for * in case object key exists
  // in maskable array
  Object.keys(obj).map(o => {
    if (['string', 'number'].includes(typeof obj[o]) && maskable.includes(o))
      obj[o] = obj[o].toString().replace(/./g, '*');
    else if (typeof obj[o] === 'object' && obj[o] !== null)
      masker(obj[o], maskable)
    return false
  });

  return obj;
}

function cnsr(obj, mask) {
  if (typeof obj !== 'object') {
    throw new TypeError(`cnsr expects an object but received ${typeof obj}`);
  }

  if (typeof mask !== 'object' || !mask.length) {
    throw new TypeError('cnsr second parameter is a required Array of strings for matching maskable data in your object. For more information see docs and usage at https://github.com/mtmr0x/cnsr');
  }

  // recreate a new object based in JSON
  // for avoiding side effects
  return masker(JSON.parse(JSON.stringify(obj)), mask);
}

module.exports = cnsr;

