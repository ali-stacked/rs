import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RegularTablesComponent } from './regular-tables/regular-tables.component';
import { RegularTablesResolver, ExtendedTablesResolver, SmartTablesResolver,
  ExternalFiltersTableResolver } from '../resolvers/tables.resolver';
import {TennisService} from '../services/tennis.service';
import {TennisResolver} from '../resolvers/tennis.resolver';
import {BigDataResolver} from '../resolvers/tennis.resolver';
import { StaticService } from '../services/static-service';
import { ExtendedTablesComponent } from './extended-tables/extended-tables.component';
import { SmartTablesComponent } from './smart-tables/smart-tables.component';
import { TennisFiltersComponent } from './tennis-filters/tennis-filters.component';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { BigDataComponent } from './big-data/big-data.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

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
    PlayerDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app
    AngularFirestoreModule, // imports firebase/firestore
    AngularFireAuthModule, // imports firebase/auth
    AngularFireStorageModule, // imports firebase/storage
    RouterModule.forChild(recordRoutes)
  ],
  providers: [
    StaticService,
    HttpClient,
    RegularTablesResolver,
    ExtendedTablesResolver,
    SmartTablesResolver,
    ExternalFiltersTableResolver,
    TennisResolver,
    TennisService,
    BigDataResolver
  ]
})

export class RecordsModule { }
