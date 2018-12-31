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
  name: "app-home-workorder-apply",
})
@Component({
  templateUrl: "workOrderApply.html",
  selector: "workOrderApply.ts"
})
export class WorkOrderApply {
  applyData: any = { bxqds: [] };
  approvalPersons: any = [];
  stationTypes: any = [];
  spr: any = [];
  csr: any = [];
  constructor(
    public alertCtrl: AlertController,
    params: NavParams,
    public actionSheet: ActionSheetController,
    public approvalNetWork: ApprovalNetwork,
    public navCtrl: NavController
  ) {
    this.applyData.bxqds.push({});
  }

  addMoreOrder() {
    this.applyData.bxqds.push({});
  }

  /// 审批人
  getApprovalPerson() {
    if (this.approvalPersons.length > 0) {
      this.showAddApprovalAlert();
    } else {
      this.approvalNetWork.getStaffList().subscribe(
        (data: any) => {
          console.log(data);
          this.approvalPersons = data;
          this.showAddApprovalAlert();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  /// 审批人
  showAddApprovalAlert() {
    var buttons = this.approvalPersons.map(item => {
      return {
        text: item.zgxm,
        handler: () => {
          this.spr.push({
            id: item.id,
            zgName: item.zgxm
          });
        }
      };
    });
    const actionSheet = this.actionSheet.create({
      buttons: buttons
    });
    actionSheet.present();
  }

  /// 抄送人
  getCopyToPerson() {
    if (this.approvalPersons.length > 0) {
      this.showAddCopyToAlert();
    } else {
      this.approvalNetWork.getStaffList().subscribe(
        (data: any) => {
          console.log(data);
          this.approvalPersons = data;
          this.showAddCopyToAlert();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  /// 抄送人
  showAddCopyToAlert() {
    var buttons = this.approvalPersons.map(item => {
      return {
        text: item.zgxm,
        handler: () => {
          this.csr.push({
            id: item.id,
            zgName: item.zgxm
          });
        }
      };
    });
    const actionSheet = this.actionSheet.create({
      buttons: buttons
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
                billType: 1,
                sqly: this.applyData.sqly,
                bxsj: this.applyData.bxsj,
                title: this.applyData.title,
                bxlx: this.applyData.bxlx,
              },
              spid: spid,
              csid: csid,
              items: this.applyData.cgqds,
            };
            this.approvalNetWork.applyForOrder(params).subscribe(
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
