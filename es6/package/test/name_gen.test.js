const genner = require('../functions/gen_name');

// test runner usually
test('name is ??', () => {
  
  let text = genner('Nigel');
  // assurion library usually
  expect(text).toBe('Nigel');
});