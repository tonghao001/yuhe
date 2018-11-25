import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";

@IonicPage({
  name: "app-home-salary"
})
@Component({
  templateUrl: "salary.html",
  selector: "salary.ts"
})

export class Salary {
    

  nextMonth() {
    console.log("上一月")
  }
  preMonth() {
    console.log("下一月")
  }
}