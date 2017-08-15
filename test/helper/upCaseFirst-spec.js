const test = require('ava');
const { upCaseFirst } = require('../../src/helper');

test('should_首字母大写', t => {
  t.is(upCaseFirst('hello'), 'Hello');
});
