import { HttpNetwork } from "./http";
import { Injectable } from "@angular/core";

@Injectable()
export class NoticeNetWork {
  constructor(private http: HttpNetwork) {
    
  }
  getunReadNoticeList() {
    return this.http.get('/yh_YEManager/app/notice/getUnreadList');
  }
  
  getReadNoticeList() {
    return this.http.get('/yh_YEManager/app/notice/getReadList');
  }

  getReadPersonList(data) {
    return this.http.postForm('/yh_YEManager/app/notice/getHaveRead', data);
  }

  getUnReadPersonList(data) {
    return this.http.get('/yh_YEManager/app/notice/getNeverRead', data);
  }

  getReadNoticeDetails(data) {
    return this.http.get('/yh_YEManager/app/notice/getRead', data);
  }

  getUnReadNoticeDetails(data) {
    return this.http.postForm('/yh_YEManager/app/notice/getUnread', data);
  }

  postNoticeForAllUsers(data) {
    return this.http.postForm('/yh_YEManager/app/notice/notice', data);
  }

  saveNewNotice(data) {
    return this.http.postForm('/yh_YEManager/app/notice/saveNotice', data);
  }
}