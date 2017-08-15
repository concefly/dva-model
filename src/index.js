const { upCaseFirst } = require('./helper');

class DvaModel {
  constructor() {
    this._model = {
      namespace: '',
      state: {},
      subscriptions: {},
      effects: {},
      reducers: {},
    };
  }
  _mergeToModel(field, value) {
    Object.assign(this._model[field], value);
    return this;
  }
  /**
   * 配置一个同步对象
   * 
   * @param {string} name 
   * @param {any} [spec] 
   * @param {string} [spec.initialState] 初始状态
   * @returns 
   * @memberof DvaModel
   */
  assignSyncObject(name, spec = {}) {
    const upCasedName = upCaseFirst(name);
    if (typeof spec.initialState !== 'undefined')
      this._mergeToModel('state', {
        [name]: spec.initialState,
      });
    this._mergeToModel('reducers', {
      [`${name}Change`]: (state, action) => {
        return Object.assign({}, state, {
          [name]: action.payload,
        });
      },
    });
    return this;
  }
  assignAsyncObject(name, spec) {}
  assignSyncList(name, spec) {}
  assignAsyncList(name, spec) {}
  toModel(namespace) {
    return Object.assign({}, this._model, { namespace });
  }
}

module.exports = DvaModel;
