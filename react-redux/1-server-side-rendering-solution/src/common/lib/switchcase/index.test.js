import switchcase from './index';

describe('switchcase utility', () => {
  it('pass single case and returns proper value', () => {
    const s = switchcase(
      { TRIGGER_EXAMPLE: { example: true } }
    )({})('TRIGGER_EXAMPLE');
    expect(JSON.stringify(s)).toBe(JSON.stringify({ example: true }));
  });

  it('pass multiple cases and returns proper value', () => {
    const s = switchcase(
      {
        TRIGGER_EXAMPLE: { example: true },
        TRIGGER_EXAMPLE_FALSE: { example: false }
      }
    )({})('TRIGGER_EXAMPLE');
    expect(JSON.stringify(s)).toBe(JSON.stringify({ example: true }));
  });
});

