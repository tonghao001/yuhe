import { HttpNetwork } from "./http";
import { Injectable } from "@angular/core";

@Injectable()
export class NoticeNetWork {
  constructor(private http: HttpNetwork) {
    
  }
  getunReadNoticeList() {
    return this.http.get('/app/notice/getUnreadList');
  }
  
  getReadNoticeList() {
    return this.http.get('/app/notice/getReadList');
  }

  getReadPersonList(data) {
    return this.http.postForm('/app/notice/getHaveRead', data);
  }

  getUnReadPersonList(data) {
    return this.http.get('/app/notice/getNeverRead', data);
  }

  getReadNoticeDetails(data) {
    return this.http.get('/app/notice/getRead', data);
  }

  getUnReadNoticeDetails(data) {
    return this.http.postForm('/app/notice/getUnread', data);
  }

  postNoticeForAllUsers(data) {
    return this.http.postForm('/app/notice/notice', data);
  }

  saveNewNotice(data) {
    return this.http.postForm('/app/notice/saveNotice', data);
  }
}