import { HttpNetwork } from "./http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserNetwork {

  constructor(private http: HttpNetwork) {
  }
  login(data) {
    return this.http.postForm('/app/login/signIn', data);
  }
  getSMSCode(data) {
    return this.http.postForm('/app/login/getSMSCode', data);
  }
  logout() {
    return this.http.postForm('/app/login/signOut');
  }
  modifyPassword(data) {
    return this.http.postForm('/app/login/modifyPassword', data);
  }
  resetPassword(data) {
    return this.http.postForm('/app/login/resetPassword', data);
  }
}
