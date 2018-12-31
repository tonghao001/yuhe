import { HttpNetwork } from "./http";
import { Injectable } from "@angular/core";


//职工出勤
@Injectable()
export class KindergartenOverviewNetwork {

  constructor(private http: HttpNetwork) {

  }
  //获取全体职工考勤情况
  getAllAttendanceInfo(data:any) {
    return this.http.get('/app/workattendance/getAttendances', data);
  }
  //获取所有职工的出勤list
  getStaffAttendanceList(data:any) {
    return this.http.get('/app/workattendance/getStaffAttendances', data);
  }


  //获取整体疾病情况
  getAllSicknessCaseInfo(data:any) {
    return this.http.get('/app/illnessinfo/getIllnessInfos', data);
  }
  //获取财务收入来源情况
  getAllFinancialSourceInfo(data:any) {
    return this.http.get('/app/financialstatement/selectIncomes', data);
  }
  //获取财务报表情况
  getAllFinancialSourceRankingInfo(data:any) {
    return this.http.get('/app/financialstatement/selectIncomesRank', data);
  }

  

}
