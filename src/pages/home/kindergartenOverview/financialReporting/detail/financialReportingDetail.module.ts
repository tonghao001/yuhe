import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { FinancialReportingDetailPage } from "./financialReportingDetail";
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    FinancialReportingDetailPage
  ],
  imports: [
    IonicPageModule.forChild(FinancialReportingDetailPage),
    ChartModule
  ],
  entryComponents: [
    FinancialReportingDetailPage
  ]
})
export class FinancialReportingDetailPageModule { };