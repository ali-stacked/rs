import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceDashboardComponent } from './ecommerce-dashboard/ecommerce-dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// echarts - lib: https://github.com/xieziyu/ngx-echarts
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardsService } from '../services/dashboards.service';
import { CrmDashboardComponent } from './crm-dashboard/crm-dashboard.component';
import { EcommerceDashboardResolver, CrmDashboardResolver } from '../resolvers/dashboards.resolver';
import { NewsService } from '../services/news.service';
import {NewsDashboardComponent} from './news-dashboard/crm-dashboard.component';
import {TeamDashboardComponent} from './team-dashboard/crm-dashboard.component';

export const dashboardRoutes = [
  {
    path: '',
    redirectTo: 'news'
  },
  {
    path: 'news',
    component: NewsDashboardComponent,
    resolve: {
      data : CrmDashboardResolver
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
    path: 'ecommerce',
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
  }
];

@NgModule({
  declarations: [EcommerceDashboardComponent, TeamDashboardComponent, NewsDashboardComponent, CrmDashboardComponent],
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
    NewsService
  ]
})
export class DashboardsModule { }
