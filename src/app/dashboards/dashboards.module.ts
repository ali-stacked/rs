import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ArticleService } from "../services/article.service";
import { LandingDashboardComponent } from "./landing-dashboard/landing-dashboard.component";
// echarts - lib: https://github.com/xieziyu/ngx-echarts
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardsService } from '../services/dashboards.service';
import { EcommerceDashboardResolver, CrmDashboardResolver} from '../resolvers/dashboards.resolver';
import { NewsService } from '../services/news.service';
import { NewsDashboardComponent } from './news-dashboard/news-dashboard.component';
import { TeamDashboardComponent } from './team-dashboard/team-dashboard.component';
import { DataVizComponent } from "./data-viz/data-viz.component";
import { DataVizResolver } from "../resolvers/dashboards.resolver";
import { CovidVizComponent } from "./covid-viz/covid-viz.component";
import {CrmDashboardComponent} from "./crm-dashboard/crm-dashboard.component";
import { TeamDetailComponent } from './team-detail/team-detail.component';
import {TeamDetailResolver} from "../resolvers/dashboards.resolver";
import {NosqlService} from "../services/nosql.service";
import {TennisService} from "../services/tennis.service";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {ConfigDashboardComponent} from "./config-dashboard/config-dashboard.component";
import {CovidkpiDashboardComponent} from  "./covidKpi-dashboard/covidkpi-dashboard.component";
export const dashboardRoutes = [
  {
    path: '',
    redirectTo: 'covid-kpi'
  },
  {
    path: 'trending-news',
    component: NewsDashboardComponent,
    resolve: {
      data : CrmDashboardResolver
    }
  },
  {
    path: 'crm',
    component: CrmDashboardComponent,
    resolve: {
      data : CrmDashboardResolver
    }
  },
  {
    path: 'covid-k',
    component: CovidVizComponent,
    resolve: {
      data : DataVizResolver
    }
  },
  {
    path: 'data-viz',
    component: DataVizComponent,
    resolve: {
      data : DataVizResolver
    }
  },

  {
    path: 'team',
    component: TeamDashboardComponent,
    resolve: {
      data : CrmDashboardResolver
    }
  },
  {
    path: 'config',
    component: ConfigDashboardComponent,
    resolve: {
      data : CrmDashboardResolver
    }
  },

  {
    path: 'contact-us',
    component: ContactUsComponent,
    resolve: {
      data : CrmDashboardResolver
    }
  },

  {
    path: 'technologist/:id/detail',
    component: TeamDetailComponent,
    resolve: {
      data : TeamDetailResolver
    }
  },
  {
    path: 'covid-kpi',
    component: CovidkpiDashboardComponent,
    resolve: {
      data : EcommerceDashboardResolver
    }
  }
];

@NgModule({
  declarations: [CovidkpiDashboardComponent, TeamDashboardComponent,
    LandingDashboardComponent,CrmDashboardComponent,ContactUsComponent,
     NewsDashboardComponent,ConfigDashboardComponent, CovidVizComponent,DataVizComponent, TeamDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    NgxEchartsModule,
    SharedModule
  ],
  providers: [
    DashboardsService,
    EcommerceDashboardResolver,
    CrmDashboardResolver,
    NewsService,
    ArticleService,
    NosqlService,
    TennisService,
    DataVizResolver,TeamDetailResolver]
})
export class DashboardsModule { }
