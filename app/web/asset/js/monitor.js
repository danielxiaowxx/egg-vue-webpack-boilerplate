"use strict";
import Common from './common';

exports.start = info => {
  const common = new Common();
  if (common.isObject(info)) {
    console.log('-----object-----');
  } else if (common.isString(info)) {
    console.log('-----string-----');
  }
};