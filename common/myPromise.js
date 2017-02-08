"use strict";

var Promise = function() {
  this.thenQueue = [];
  this.isPromise = true;
};

var Deferred = function() {
  this.promise = new Promise();
};

Promise.prototype.then = function(fulfilledHandler) {
  var handler = {};
  if (typeof fulfilledHandler === 'function') {
    handler.fulfilled = fulfilledHandler;
  }
  this.thenQueue.push(handler);
  return this;
};

Deferred.prototype.callback = function() {
  var that = this;
  return function(value) {
    return that.resolve(value);
  }
};

Deferred.prototype.resolve = function(value) {
  var promise = this.promise;
  var handler;
  while ((handler = promise.thenQueue.shift())) {
    if (handler && handler.fulfilled) {
      var res = handler.fulfilled(value);
      if (res && res.isPromise) {
        res.thenQueue = promise.thenQueue;
        this.promise = res;
        return;
      }
    }
  }
};

exports.createPromise = function(func, options) {
  var deferred = new Deferred();
  if (options) {
    func(options, deferred.callback());
  } else {
    func(deferred.callback());
  }
  return deferred.promise;
};
