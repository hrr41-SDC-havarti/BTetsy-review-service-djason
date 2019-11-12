'use strict'
import http from 'k6/http';
import { sleep } from 'k6';
exports.config = {
  app_name: ['SDC-REVIEWS'],
  license_key: __ENV.RELIC_K6_API_KEY,
  logging: {
    level: 'info'
  },
  allow_all_headers: true,
  attributes: {
    exclude: [
      'request.headers.cookie',
      'request.headers.authorization',
      'request.headers.proxyAuthorization',
      'request.headers.setCookie*',
      'request.headers.x*',
      'response.headers.cookie',
      'response.headers.authorization',
      'response.headers.proxyAuthorization',
      'response.headers.setCookie*',
      'response.headers.x*'
    ]
  }
}

var random = () => {
  return Math.floor(Math.random(1) * 100);
}

//httpDebug: "full",
export let options = {
  rps: 1000,
  batchPerHost: 5,
  stages: [
    { duration: "4m", target: 100 },
    { duration: "4m", target: 100 },
    { duration: "2m", target: 50 }
  ]
}

export default () => {
  http.get(`http://127.0.0.1:5000/?${random()}`);
  http.get(`http://127.0.0.1:5000/api/comment/${random()}`);
  //sleep(1);
}