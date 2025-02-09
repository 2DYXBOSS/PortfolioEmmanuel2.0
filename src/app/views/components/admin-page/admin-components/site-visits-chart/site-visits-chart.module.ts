
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteVisitsChartComponent } from './site-visits-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    SiteVisitsChartComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports: [
    SiteVisitsChartComponent
  ]
})
export class SiteVisitsChartModule { }