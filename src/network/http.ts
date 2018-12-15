import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { extend } from 'lodash';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Injectable()
export class HttpNetwork {
  constructor(private http: HttpClient) { }

  fetch(url, options?) {
    const httpOptions = {
      body: undefined,
      headers:{'Content-Type': 'application/json;charset=UTF-8'},
      withCredentials: true
      // headers: new HttpHeaders({
      //   'Content-Type': 'application/json;charset=UTF-8',
      //   // responseType: 'json'
      // })
    };


    if (url.indexOf('http') !== 0) {
      url = `${HTTP_URL.MAIN}${url}`;
    }
    options = options || {};

    extend(httpOptions.headers, options.headers || {});
    if (options.body) {
      httpOptions.body = options.body;
    }
    return this.http.request(options.method, url, httpOptions);
    
    // .subscribe((data:{message?:string})=>{
      
    // },err=>{
    //   return err;
    // });
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

  getConcat(url, params?) {
    params = params || {};
    let str = Object.keys(params).map(key => {
      return params[key];
    }).join('/');

    if (str) {
      url = `${url}/${str}`;
    }
    return this.fetch(url, { method: 'get' });
  }


  post(url, params?) {
    params = params || {};
    return this.fetch(url, {method:'post',body:JSON.stringify(params)});
  }
  postForm(url, params?) {
    params = params || {};
    let options = {
      method:'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
      },
      body: json2form(params)
    }
    return this.fetch(url, options);
  }
  
}

// var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /** @module json2formData */

export function json2form (a) {
  var s = [],
      rbracket = /\[\]$/,
      isArray = function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  },
      add = function add(k, v) {
    v = typeof v === 'function' ? v() : v === null ? '' : v === undefined ? '' : v;
    s[s.length] = encodeURIComponent(k) + '=' + encodeURIComponent(v);
  },
      buildParams = function buildParams(prefix, obj) {
    var i, len, key;

    if (prefix) {
      if (isArray(obj)) {
        for (i = 0, len = obj.length; i < len; i++) {
          if (rbracket.test(prefix)) {
            add(prefix, obj[i]);
          } else {
            buildParams(prefix + '[' + (typeof(obj[i]) === 'object' ? i : '') + ']', obj[i]);
          }
        }
      } else if (obj && String(obj) === '[object Object]') {
        for (key in obj) {
          buildParams(prefix + '[' + key + ']', obj[key]);
        }
      } else {
        add(prefix, obj);
      }
    } else if (isArray(obj)) {
      for (i = 0, len = obj.length; i < len; i++) {
        add(obj[i].name, obj[i].value);
      }
    } else {
      for (key in obj) {
        buildParams(key, obj[key]);
      }
    }
    return s;
  };

  return buildParams('', a).join('&').replace(/%20/g, '+');
};

export const HTTP_URL = {
  MAIN: 'http://www.yuhe.insighthink.com/yh_YEManager'
}