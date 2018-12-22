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
  // 获取违阅读列表 抄送
  getReadCopyList() {
    return this.http.get('/app/approval/myReception/getReadList');
  }
  // 获取已阅读列表 抄送
  getUnReadCopyList() {
    return this.http.get('/app/approval/myReception/getUnreadList');
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
  // 请假
  applyRestDetail(data) {
    return this.http.getConcat('/app/approval/viewApproval/billType1', data);
  }
  // 采购
  applyBuyDetail(data) {
    return this.http.getConcat('/app/approval/viewApproval/billType2', data);
  }
  // 离职
  applyLeaveDetail(data) {
    return this.http.getConcat('/app/approval/viewApproval/billType3', data);
  }
  // 物品领用
  applyGoodDetail(data) {
    return this.http.getConcat('/app/approval/viewApproval/billType4', data);
  }
  // 工单
  applyOrderDetail(data) {
    return this.http.getConcat('/app/approval/viewApproval/billType5', data);
  }
  // 请假
  applyForReset(data) {
    return this.http.postForm('/app/approval/application/postLeave', data);
  }
  // 采购
  applyForBuy(data) {
    return this.http.postForm('/app/approval/application/postPurchase', data);
  }
  // 工单
  applyForOrder(data) {
    return this.http.postForm('/app/approval/application/postRepair', data);
  }
  // 领用
  applyForGood(data) {
    return this.http.postForm('/app/approval/application/postRequestGoods', data);
  }
  // 离职
  applyForLeave(data) {
    return this.http.postForm('/app/approval/application/postResignation', data);
  }
  getRestApplayType() {
    return this.http.get('/app/approval/application/getLeaveType');
  }
  getRestResginType() {
    return this.http.get('/app/approval/application/getResignationType');
  }
  getStaffList() {
    return this.http.get('/app/approval/application/getStaffList');
  }
}