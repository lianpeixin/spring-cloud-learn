"use strict";

const querystring = require('querystring');
const crypto = require('crypto');

const config = require('./myConfig');

/** 百度签名生成 */
exports.encode = function(subUrl, param) {
  for (var key in param) {
    if (key) {
      param[key] = encodeURIComponent(param[key]);
    }
  }
  var paramStr = querystring.stringify(param);
  var wholeStr = `${subUrl}?${paramStr}${config.sk}`;
  var md5 = crypto.createHash('md5');
  md5.update(encodeURIComponent(wholeStr));
  return md5.digest('hex');
};
