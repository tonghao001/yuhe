import { HttpNetwork } from "./http";
import { Injectable } from "@angular/core";

@Injectable()
export class CheckNetwork {
  constructor(private http: HttpNetwork) {
    
  }
  // 上班打卡
  checkIn(data) {
    return this.http.post('/app/attendanceManagement/checkIn', data); 
  }
  // 下班打卡
  checkOut(data) {
    return this.http.post('/app/attendanceManagement/checkOut', data); 
  }
  // 日报
  getDayReport(data) {
    return this.http.get('/app/attendanceManagement/getDailyReport', data); 
  }
  // 月报
  getMonthReport(data) {
    return this.http.get('/app/attendanceManagement/getMonthlyReport', data); 
  }
  // 获取打卡位置
  getCompanyLocation() {
    return this.http.get('/app/attendanceManagement/getLocationSetting'); 
  }
}