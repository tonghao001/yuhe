import { Component } from "@angular/core";
import { NavParams, IonicPage } from "ionic-angular";

@IonicPage({
    name: "app-home-edit-announcement",
})


@Component({
  templateUrl: "editAnnouncement.html",
  selector: "editAnnouncement.ts"
})

// todo 复用 
export class EditAnnouncement {

    // 0 通知， 1 邮件
    type;
    constructor(params: NavParams) {
        this.type = params.data.type;
    }
    sendAnnounceMent() {
        
    }
}