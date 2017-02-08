"use strict";

const request = require('request');
const querystring = require('querystring');

const config = require('./myConfig');
const sn = require('./sn');
const myPromise = require('../common/myPromise');


exports.getLocation = function(ip, callback) {
  var param = {
    ak: config.ak,
    ip: ip,
  };
  var snParam = sn.encode(config.subUrls.locationIp, param);
  param.sn = snParam;
  var url = `${config.baseUrl}${config.subUrls.locationIp}?${querystring.stringify(param)}`;
  return myPromise.createPromise(function() {
    request(url, (error, response) => {
      var body = JSON.parse(response.body);
      callback(body);
    });
  });
};
