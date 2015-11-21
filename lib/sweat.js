/*
 * Sweat
 * https://github.com/goliatone/sweat
 *
 * Copyright (c) 2015 goliatone
 * Licensed under the MIT license.
 */

'use strict';

var os = require('os');

exports.execute = function(command, callback) {
  var commander = require('./unix');

  if (os.platform() === 'win32') {
    commander = require('./windows');
  }

  return commander.executeWithPrivileges(command, callback);
};
