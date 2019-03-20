const genner = require('../functions/gen_name');

// test runner usually
test('name is Nigel', () => {
  
  let text = genner('Nigel');
  // assurion library usually
  expect(text).toBe('Nigel');
});

test('name is empty', () => {
  
  let text = genner('');
  // assurion library usually
  expect(text).toBe('');
});