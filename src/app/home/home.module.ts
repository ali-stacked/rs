import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AliComponent } from './ali/ali.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ModalsComponent } from './modals/modals.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { CreateAccountModalComponent } from './modals/templates/create-account-modal/create-account-modal.component';
import { SignInModalComponent } from './modals/templates/sign-in-modal/sign-in-modal.component';
import { UtilitiesService } from './utilities.service';
import {CrmDashboardResolver} from '../resolvers/dashboards.resolver';
import {DashboardsService} from '../services/dashboards.service';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material';
import {WorkComponent } from './work/work.component';
import {NgxSpinnerModule } from 'ngx-spinner';


export const homeRoutes = [
  {
    path: '',
    redirectTo: 'ali'
  },
  {
    path: 'ali',
    component: AliComponent,
    resolve: {
      data: CrmDashboardResolver
    }
  },
  {
    path: 'alerts',
    component: AlertsComponent
  },
  {
    path: 'modals',
    component: ModalsComponent
  },
  {
    path: 'file-uploader',
    component: FileUploaderComponent
  },
  {
    path: 'autocomplete',
    component: AutocompleteComponent
  }
];

@NgModule({
  declarations: [
    AliComponent,
    ModalsComponent,
    AlertsComponent,
    AutocompleteComponent,
    FileUploaderComponent,
    CreateAccountModalComponent,
    SignInModalComponent,
    WorkComponent
  ],
  providers: [
    UtilitiesService,
    CrmDashboardResolver,
    DashboardsService
  ],
  entryComponents: [
    CreateAccountModalComponent,
    SignInModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(homeRoutes),
    MatListModule,
    MatCardModule,
    NgxSpinnerModule
  ],  exports: [AliComponent]
})
export class HomeModule { }
