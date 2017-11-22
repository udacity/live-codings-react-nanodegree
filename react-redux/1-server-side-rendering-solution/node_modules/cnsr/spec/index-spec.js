const cnsr = require('./../index.js');

describe('cnsr lib', () => {
  it('returns error if provided first parameter is not object', () => {
    expect(cnsr).toThrowError(TypeError);
  });

  it('cnsr function returns a object', () => {
    expect(typeof cnsr({}, ['test'])).toBe('object');
  });

  it('is passing data and receiving masked data', () => {
    expect(cnsr({ a: 1, b: { c: 2, d: null }}, ['c']).toString()).toBe({ a: 1, b: { c: '*' } }.toString());
  });
});

