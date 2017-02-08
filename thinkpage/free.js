"use strict";

const request = require('request');
const querystring = require('querystring');

const config = require('./myConfig.json');
const myPromise = require('../common/myPromise');

var Param = function(location) {
  this.key = config.key;
  this.language = config.language;
  this.unit = 'c';
  this.location = location
};

/**
获取当前天气
*/
exports.getCurrentWeather = function(location, callback) {
  var param = new Param(location);
  return myPromise.createPromise(function() {
    request(`${config.baseUrl}${config.subUrls.weatherNow}?${querystring.stringify(param)}`, (error, response) => {
      if (error) {
        console.error(error);
      } else {
        let json = JSON.parse(response.body);
        callback({
          text: json.results[0].now.text,
          temperature: json.results[0].now.temperature
        });
      }
    });
  });
};
