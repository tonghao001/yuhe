import { HttpNetwork } from "./http";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserNetwork {
  constructor(private http: HttpNetwork) {

  }
  login(data) {
    return this.http.postForm('/yh_YEManager/app/login/signIn', data);
  }
  getSMSCode(data) {
    return this.http.postForm('/yh_YEManager/app/login/getSMSCode', data);
  }
}