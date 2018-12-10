import { HttpNetwork } from "./http";
import { Injectable } from "@angular/core";

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
  logout(){
    return this.http.get('/yh_YEManager/app/login/signOut');
  }
}