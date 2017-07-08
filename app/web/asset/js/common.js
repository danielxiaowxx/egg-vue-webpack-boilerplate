class Common {
  constructor(option) {
    this.option = option;
  }

  isFunction(value) {
    return typeof value === 'function';
  }

  isObject(value) {
    return typeof value === 'object';
  }

  isString(value) {
    return typeof value === 'string';
  }

  isBoolean(value) {
    return typeof value === 'boolean';
  }
}

module.exports = Common;