import { Component } from "@angular/core";
import { NavParams, IonicPage } from "ionic-angular";

@IonicPage({
    name: "app-home-announce-details",
})


@Component({
  templateUrl: "announce-details.html",
  selector: "announce-details.ts"
})

export class AnnounceDetails {
  item;
  users;
  constructor(params: NavParams) {
    this.item = params.data;
    this.users = [
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    ];
  }
}
