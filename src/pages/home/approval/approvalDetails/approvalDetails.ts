import { Component } from "@angular/core";
import {
  IonicPage,
  AlertController,
  NavParams,
  NavController
} from "ionic-angular";
import { ApprovalNetwork } from "./../../../../network/approval.network";
import { HTTP_URL } from "../../../../network/http";

@IonicPage({
  name: "app-home-approval-details"
})
@Component({
  templateUrl: "approvalDetails.html",
  selector: "approvalDetails.ts"
})
export class ApprovalDetails {
  params: any = {};
  type = 1;
  buyDetail: any = { csxq: {}, cgqds: [], cgsq: {} };
  restDetail: any = { qjsq: {} };
  levelDetail: any = { lzsq: {} };
  goodDetail: any = { lymxs: [], lysqb: {} };
  orderDetail: any = { bxqds: [], gdsq: {} };

  csr: any = [];
  spr: any = [];
  picture: any = [];
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    params: NavParams,
    public approvalNetWork: ApprovalNetwork
  ) {
    this.params = params.data.params;
    this.type = params.data.type;

    switch (this.params.billType) {
      case 1:
        this.approvalNetWork
          .applyBuyDetail({
            id: this.params.id
          })
          .subscribe(
            (data: any) => {
              console.log(data);
              this.buyDetail = data;
              this.csr = this.addImageToUser(data.csr);
              this.spr = this.addImageToUser(data.spr);
              console.log(this.spr);
              this.picture = data.path;
            },
            error => {
              console.log(error);
            }
          );
        break;
      case 2:
        this.approvalNetWork
          .applyGoodDetail({
            id: this.params.id
          })
          .subscribe(
            (data: any) => {
              console.log(data);
              this.goodDetail = data;
              this.csr = this.addImageToUser(data.csr);
              this.spr = this.addImageToUser(data.spr);
              this.picture = data.path;
            },
            error => {
              console.log(error);
            }
          );
        break;
      case 3:
        this.approvalNetWork
          .applyRestDetail({
            id: this.params.id
          })
          .subscribe(
            (data: any) => {
              console.log(data);
              if (!data.qjsq) {
                data.qjsq = {};
              }
              this.restDetail = data;
              this.csr = this.addImageToUser(data.csr);
              this.spr = this.addImageToUser(data.spr);
              this.picture = data.path;
            },
            error => {
              console.log(error);
            }
          );
        break;
      case 4:
        this.approvalNetWork
          .applyLeaveDetail({
            id: this.params.id
          })
          .subscribe(
            (data: any) => {
              console.log(data);
              if (!data.lzsq) {
                data.lzsq = {};
              }
              this.levelDetail = data;
              this.csr = this.addImageToUser(data.csr);
              this.spr = this.addImageToUser(data.spr);
              this.picture = data.path;
            },
            error => {
              console.log(error);
            }
          );
        break;
      case 5:
        this.approvalNetWork
          .applyOrderDetail({
            id: this.params.id
          })
          .subscribe(
            (data: any) => {
              console.log(data);
              this.orderDetail = data;
              this.csr = this.addImageToUser(data.csr);
              this.spr = this.addImageToUser(data.spr);
              this.picture = data.path;
            },
            error => {
              console.log(error);
            }
          );
        break;
      default:
        break;
    }
  }

  addImageToUser(users: Array<any>) {
    return users.map(item => {
      if (item.staffInformations) {
        item.image = HTTP_URL.MAIN + "/images/" + item.staffInformations.photo;
      }
      return item;
    });
  }

  approvalClick() {
    const confirm = this.alertCtrl.create({
      title: "",
      message: "你确定要通过审批吗?",
      buttons: [
        {
          text: "取消",
          handler: () => {}
        },
        {
          text: "通过",
          handler: () => {
            this.approvalNetWork
              .approvalSucceed({
                billType: this.params.billType,
                id: this.params.id
              })
              .subscribe(
                (data: any) => {
                  console.log(data);
                  if (data.status === 0) {
                    this.navCtrl.pop();
                  }
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

  disApprovalClick() {
    const confirm = this.alertCtrl.create({
      title: "",
      message: "你确定要不通过审批吗?",
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
            this.approvalNetWork
              .approvalFaild({
                billType: this.params.billType,
                id: this.params.id
              })
              .subscribe(
                (data: any) => {
                  console.log(data);
                  if (data.status === 0) {
                    this.navCtrl.pop();
                  }
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

  withDrow() {
    const confirm = this.alertCtrl.create({
      title: "",
      message: "你确定要撤回审批吗?",
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
            this.approvalNetWork
              .withdrowApplay({
                billType: this.params.billType,
                id: this.params.id
              })
              .subscribe(
                (data: any) => {
                  console.log(data);
                  if (data.status === 0) {
                    this.navCtrl.pop();
                  }
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
