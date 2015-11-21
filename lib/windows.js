'use strict';

var child_process = require('child_process'),
    windosu = require('windosu');

exports.executeWithPrivileges = function(command, callback) {

  if (command == null) {
    throw new Error('Missing command argument');
  }

  if (!Array.isArray(command)) {
    throw new Error('Invalid command argument: not an array');
  }

  if (!command) {
    throw new Error('Invalid command argument: empty array');
  }

  if (callback == null) {
    throw new Error('Missing callback argument');
  }

  if (typeof callback !== 'function') {
    throw new Error('Invalid callback argument: not a function');
  }
  //TODO: make analog to unix!!
  return windosu.exec(command.join(' '), callback);
};
