(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myBundle = {}));
})(this, (function (exports) { 'use strict';

  function add(a, b) {
    return a + b
  }

  function log(msg) {
    console.log(msg);
  }

  exports.add = add;
  exports.log = log;

}));
