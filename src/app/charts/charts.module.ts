import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {RealCharts} from "./rcharts/rcharts";
import { ChartsDataService } from './charts.service';
import {DashboardsService} from "../services/dashboards.service";

// echarts - lib: https://github.com/xieziyu/ngx-echarts
import { NgxEchartsModule } from 'ngx-echarts';
import { EchartsPageComponent } from './echarts/echarts-page.component';

// chartjs - lib: https://github.com/valor-software/ng2-charts
import { ChartsJsPageComponent } from './chartjs/chartjs-page.component';
import { ChartsModule as Ng2ChartsModule } from 'ng2-charts';

// ngx-charts - lib: https://swimlane.gitbook.io/ngx-charts/
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxChartsPageComponent } from './ngx-charts/ngx-charts-page.component';
import {RealXCharts} from "./real-ngx/realngx.component";
import {RealTSCharts} from "./realjs/realjs-page.component";

export const chartsRoutes = [
  {
    path: '',
    redirectTo: 'stacked-charts'
  },
  {
    path: 'custom-charts',
    component: EchartsPageComponent
  },
  {
    path: 'charts-rs',
    component: ChartsJsPageComponent
  },
  {
    path: 'rs',
    component: NgxChartsPageComponent
  },
  {
    path: 'real-charts',
    component: RealCharts
  },
  {
    path: 'stacked-charts',
    component: RealTSCharts
  },
  {
    path: 'scalable-viz',
    component: RealXCharts
  }
];

@NgModule({
  declarations: [
    EchartsPageComponent,
    ChartsJsPageComponent,
    NgxChartsPageComponent,
    RealCharts,
    RealXCharts,
    RealTSCharts
  ],

  providers: [
    ChartsDataService,
    DashboardsService
  ],

  imports: [
    RouterModule.forChild(chartsRoutes),
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    NgxChartsModule,
    Ng2ChartsModule
  ]
})
export class ChartsModule { }
