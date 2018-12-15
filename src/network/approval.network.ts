import { HttpNetwork } from "./http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApprovalNetwork {
  constructor(private http: HttpNetwork) {
    
  }
  // 获取发起列表
  getApplayApprovalList() {
    return this.http.get('/app/approval/myApplication/getApplicationList'); 
  }
  // 获取已审批列表
  getApprovalList() {
    return this.http.get('/app/approval/myReception/getUnreadList');  
  }
  // 获取未审批列表
  getUnApprovalList() {
    return this.http.get('/app/approval/myApprovals/getWaitingList');  
  }
  // 获取违阅读列表
  getReadUserList(data) {
    return this.http.postForm('/app/approval/myReception/getReadList', data);
  }
  // 获取已阅读列表
  getUnReadUserList(data) {
    return this.http.postForm('/app/approval/myReception/getUnreadList', data);
  }
  // 审核通过
  approvalSucceed(data) {
    return this.http.postForm('/app/approval/myApprovals/validate/billType', data);
  }
  // 审核不通过
  approvalFaild(data) {
    return this.http.postForm('/app/approval/myApprovals/invalidate/billType', data);
  }
  // 撤销申请
  withdrowApplay(data) {
    return this.http.postForm('/app/approval/myApplication/revoke', data);
  }
}