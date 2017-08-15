const test = require('ava');
const react = require('react');
const DvaModel = require('../../src/index');

test('Should_reducers_ok_assign_syncObject', t => {
  const model = new DvaModel()
    .assignSyncObject('xxx', {
      initialState: 'hello',
    })
    .toModel('n');
  t.is(model.namespace, 'n');
  t.is(model.state.xxx, 'hello');
  t.deepEqual(model.reducers.xxxChange(model.state, { payload: 'hi' }), {
    xxx: 'hi',
  });
});
