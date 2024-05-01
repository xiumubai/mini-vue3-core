var myBundle = (function (exports) {
  'use strict';

  function add(a, b) {
    return a + b
  }

  function log(msg) {
    console.log(msg);
  }

  exports.add = add;
  exports.log = log;

  return exports;

})({});
