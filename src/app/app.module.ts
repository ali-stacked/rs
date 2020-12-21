import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxLoadingModule } from 'ngx-loading';
import { ShowLoadingService } from './services/loading.service';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from './authentication/authentication.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    NgxLoadingModule,
    AuthenticationModule,
    BrowserAnimationsModule
  ],
  providers: [ShowLoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
