import { ApprovalNetwork } from './../../../../network/approval.network';
import { Component } from "@angular/core";
import {
  IonicPage,
  AlertController,
  NavParams,
  ActionSheetController,
  NavController,
} from "ionic-angular";


@IonicPage({
  name: "app-home-stationery-apply",
})
@Component({
  templateUrl: "stationeryApply.html",
  selector: "stationeryApply.ts"
})
export class StationeryApply {
  applyData: any = {lymxs: []};
  approvalPersons: any= [];
  stationTypes: any= [];
  spr: any = [];
  csr: any = [];
  constructor(
    public alertCtrl: AlertController,
    params: NavParams,
    public actionSheet: ActionSheetController,
    public approvalNetWork: ApprovalNetwork,
    public navCtrl: NavController,
  ) {
      this.applyData.lymxs.push({});
  }

  addMoreGood() {
    this.applyData.lymxs.push({});
  }

  /// 领用类型
  stationType() {
    /// 请假类型没有定义
    if (this.stationTypes.length > 0) {
      this.showStationTypeAlert()
    } else {
      this.approvalNetWork.getRestApplayType().subscribe(
        (data: any) => {
          console.log(data);
          this.stationTypes = data;
          this.showStationTypeAlert()
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  /// 领用类型
  showStationTypeAlert() {
    var buttons = this.stationTypes.map((item) => {
      return {
        text: item.qjyy,
        handler: () => {
          this.applyData.qjlx = item.id;
          this.applyData.qjyy = item.qjyy;
        }
      }
    })
    const actionSheet = this.actionSheet.create({
      buttons: buttons,
    });
    actionSheet.present();
  }

  /// 审批人
  getApprovalPerson() {
    if (this.approvalPersons.length> 0)  {
      this.showAddApprovalAlert()
    } else {
      this.approvalNetWork.getStaffList().subscribe(
        (data: any) => {
          console.log(data);
          this.approvalPersons = data;
          this.showAddApprovalAlert()
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  /// 审批人
  showAddApprovalAlert() {
    var buttons = this.approvalPersons.map((item) => {
      return {
        text: item.zgxm,
        handler: () => {
          this.spr.push({
            id: item.id,
            zgName: item.zgxm,
          })
        }
      }
    })
    const actionSheet = this.actionSheet.create({
      buttons: buttons,
    });
    actionSheet.present();
  }

  /// 抄送人
  getCopyToPerson() {
    if (this.approvalPersons.length> 0)  {
      this.showAddCopyToAlert()
    } else {
      this.approvalNetWork.getStaffList().subscribe(
        (data: any) => {
          console.log(data);
          this.approvalPersons = data;
          this.showAddCopyToAlert()
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  /// 抄送人
  showAddCopyToAlert() {
    var buttons = this.approvalPersons.map((item) => {
      return {
        text: item.zgxm,
        handler: () => {
          this.csr.push({
            id: item.id,
            zgName: item.zgxm,
          })
        }
      }
    })
    const actionSheet = this.actionSheet.create({
      buttons: buttons,
    });
    actionSheet.present();
  }

  procurementApply() {
    const confirm = this.alertCtrl.create({
      title: "",
      message: "你确定要通过申请吗?",
      buttons: [
        {
          text: "取消",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "确定",
          handler: () => {
            console.log("Agree clicked");
            var spid = this.spr.map((item) => { return item.id });
            var csid = this.csr.map((item) => { return item.id })
            var params = {
              apply: {
                billType: 2,
                lysj: this.applyData.lysj,
              },
              spid: spid,
              csid: csid,
              items: this.applyData.lymxs,
            };
            // TODO: 接口不通 ！！！
            this.approvalNetWork.applyForReset(params).subscribe(
              (data: any) => {
                console.log(data);
                this.navCtrl.pop();
              },
              error => {
                console.log(error);
              }
            );
          }
        }
      ]
    });
    confirm.present();
  }
}
