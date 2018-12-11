import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
  constructor() {

  }

  get(key) {
    let value = Cache[key];
    if (value === undefined) {
      value = localStorage.getItem(key);
      if (value) {
        try {
          value = JSON.parse(value);
        }
        catch (e) {
          console.error('json parse error',e);
        }
      }
    }
    
    return value;
  }
  set(key, value) {
    Cache[key] = value;
    localStorage.setItem(key, JSON.stringify(value));
  }
}
const Cache = {};

export const STORAGE_KEY = {
  USER_INFO: 'yh_user_info'
}
