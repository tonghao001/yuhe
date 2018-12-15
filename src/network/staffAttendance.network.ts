import { HttpNetwork } from "./http";
import { Injectable } from "@angular/core";


//职工出勤
@Injectable()
export class StaffAttendanceNetwork {

  constructor(private http: HttpNetwork) {
  }
  //获取全体职工考勤情况
  login(data) {
    return this.http.get('/app/workattendance/getAttendances', data);
  }
  
}
