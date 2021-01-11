import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceDashboardComponent } from './ecommerce-dashboard/ecommerce-dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ArticleService } from "../services/article.service";
import { LandingDashboardComponent } from "./landing-dashboard/landing-dashboard.component";
// echarts - lib: https://github.com/xieziyu/ngx-echarts
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardsService } from '../services/dashboards.service';
import { CrmDashboardComponent } from './crm-dashboard/crm-dashboard.component';
import { EcommerceDashboardResolver, CrmDashboardResolver} from '../resolvers/dashboards.resolver';
import { NewsService } from '../services/news.service';
import { NewsDashboardComponent } from './news-dashboard/news-dashboard.component';
import { TeamDashboardComponent } from './team-dashboard/team-dashboard.component';
import { CovidDashboardComponent } from './covid-dashboard/covid-dashboard.component';
import { CovidTablesResolver } from "../resolvers/grid.resolver";
import { DataVizComponent } from "./data-viz/data-viz.component";
import { DataVizResolver } from "../resolvers/dashboards.resolver";
import { CovidVizComponent } from "./covid-viz/covid-viz.component";

export const dashboardRoutes = [
  {
    path: '',
    redirectTo: 'covid'
  },
  {
    path: 'covid',
    component: NewsDashboardComponent,
    resolve: {
      data : CrmDashboardResolver
    }
  },
  {
    path: 'covid-viz',
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
    path: 'covid-test',
    component: EcommerceDashboardComponent,
    resolve: {
      data : EcommerceDashboardResolver
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
    path: 'test',
    component: CovidDashboardComponent,
    resolve: {
      data : CrmDashboardResolver
    }
  }
];

@NgModule({
  declarations: [EcommerceDashboardComponent, TeamDashboardComponent,
    LandingDashboardComponent,CovidDashboardComponent,
     NewsDashboardComponent, CovidVizComponent, DataVizComponent, CrmDashboardComponent],
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
    DataVizResolver,
    CovidTablesResolver]
})
export class DashboardsModule { }
