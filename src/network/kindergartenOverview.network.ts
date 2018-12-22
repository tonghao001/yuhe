import { HttpNetwork } from "./http";
import { Injectable } from "@angular/core";


//职工出勤
@Injectable()
export class KindergartenOverviewNetwork {

  constructor(private http: HttpNetwork) {

  }
  //获取全体职工考勤情况
  getAllAttendanceInfo(data) {
    return this.http.get('/app/workattendance/getAttendances', data);
  }
  //获取所有职工的出勤list
  getStaffAttendanceList(data) {
    return this.http.get('/app/workattendance/getStaffAttendances', data);
  }


  //获取整体疾病情况
  getAllSicknessCaseInfo(data) {
    return this.http.get('/app/illnessinfo/getIllnessInfos', data);
  }
  //获取财务收入来源情况
  getAllFinancialSourceInfo(data) {
    return this.http.get('/app/financialstatement/selectIncomes', data);
  }
  //获取财务报表情况
  getAllFinancialSourceRankingInfo(data) {
    return this.http.get('/app/financialstatement/selectIncomesRank', data);
  }

  

}
