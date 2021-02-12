import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RegularTablesComponent } from './regular-tables/regular-tables.component';
import { RegularTablesResolver, ExtendedTablesResolver, SmartTablesResolver,
  ExternalFiltersTableResolver } from '../resolvers/tables.resolver';
import {TennisService} from '../services/tennis.service';
import {PlayerResolver, TennisResolver} from '../resolvers/tennis.resolver';
import {BigDataResolver} from '../resolvers/tennis.resolver';
import { StaticService } from '../services/static-service';
import { ExtendedTablesComponent } from './extended-tables/extended-tables.component';
import { SmartTablesComponent } from './smart-tables/smart-tables.component';
import { TennisFiltersComponent } from './tennis-filters/tennis-filters.component';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatTableExporterModule } from 'mat-table-exporter';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { BigDataComponent } from './big-data/big-data.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import {CovidComponent} from "./covid-data/covid-data.component";
import {NewsService} from "../services/news.service";
import {DashboardsService} from "../services/dashboards.service";
import {HealthDataResolver} from "../resolvers/grid.resolver";
import { GlobalCovidGridComponent} from "./covid-global/global-data.component";
import {GlobalCovidTablesResolver} from "../resolvers/tables.resolver";
import { AddDataComponent } from './dialogs/add-data/add-data.component';
import {HealthDataComponent} from "./health/health-data.component";

import {PlayerDetailResolver} from "../resolvers/dashboards.resolver";
import {NosqlService} from "../services/nosql.service";
import { UploadComponent } from './upload/upload.component';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { RankingsComponent } from './rankings/rankings.component';
import { DemoAlertComponent } from './dialogs/demo-alert/demo-alert.component';

export const recordRoutes = [
  {
    path: '',
    redirectTo: 'filters'
  },
  {
    path: 'scroll-data',
    component: RegularTablesComponent,
    resolve: {
      bigData : BigDataResolver
    }
  },
  {
    path: 'extended-records',
    component: ExtendedTablesComponent,
    resolve: {
      tableData : ExtendedTablesResolver
    }
  },
  {
    path: 'big-data',
    component: BigDataComponent,
    resolve: {
      bigData : BigDataResolver
    }
  },
  {
    path: 'health-data',
    component: HealthDataComponent,
    resolve: {
      bigData : HealthDataResolver
    }
  },
  {
    path: 'rankings',
    component: RankingsComponent
  },
  {
    path: 'player/:id/overview',
    component: PlayerDetailComponent,
    resolve: {
      data : PlayerResolver
    }
  },
  {
    path: 'covid-data',
    component: GlobalCovidGridComponent,
    resolve: {
      tableData : GlobalCovidTablesResolver
    }
  },
  {
    path: 'tennis-filters',
    component: TennisFiltersComponent,
    resolve: {
      tableData : TennisResolver
    }
  }
];

@NgModule({
  declarations: [
    RegularTablesComponent,
    ExtendedTablesComponent,
    SmartTablesComponent,
    TennisFiltersComponent,
    BigDataComponent,
    PlayerDetailComponent,
    CovidComponent,
    GlobalCovidGridComponent,
    AddDataComponent,
    HealthDataComponent,
    UploadComponent,
    DialogOverviewComponent,
    RankingsComponent,
    DemoAlertComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  MatTableExporterModule,
  DragDropModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app
    AngularFirestoreModule, // imports firebase/firestore
    AngularFireAuthModule, // imports firebase/auth
    AngularFireStorageModule, // imports firebase/storage
    RouterModule.forChild(recordRoutes)
  ],
  entryComponents: [AddDataComponent,DemoAlertComponent],
  providers: [
    StaticService,
    HttpClient,
    RegularTablesResolver,
    ExtendedTablesResolver,
    SmartTablesResolver,
    ExternalFiltersTableResolver,
    TennisResolver,
    TennisService,
    BigDataResolver,
    NewsService,
    DashboardsService,
    HealthDataResolver,
    GlobalCovidTablesResolver,
    PlayerDetailResolver,
      PlayerResolver,
    NosqlService
  ]
})

export class RecordsModule { }
