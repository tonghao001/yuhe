import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { extend } from 'lodash';

@Injectable()
export class HttpNetwork {
  constructor(private http: HttpClient) { }

  fetch(url, data) {
    const httpOptions = {
      body: undefined,
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        // responseType: 'json'
      })
    };


    if (url.indexOf('http') !== 0) {
      url = `${HTTP_URL.MAIN}${url}`;
    }
    data.options = data.options || {};

    extend(httpOptions.headers, data.options.headers || {});
    if (data.options.body) {
      httpOptions.body = data.options.body;
    }
    return this.http.request(data.method, url, httpOptions);
  }

  get(url, params?) {
    params = params || {};
    let str = Object.keys(params).map(key => {
      return `${key}=${params[key]}`
    }).join('&');

    if (str) {
      url = `${url}?${str}`;
    }
    return this.fetch(url, { method: 'get' });
  }

  post(url, params?) {
    params = params || {};
    return this.fetch(url, {method:'post',body:JSON.stringify(params)});
  }
}


export const HTTP_URL = {
  MAIN: 'http://idp.tezign.com'
}