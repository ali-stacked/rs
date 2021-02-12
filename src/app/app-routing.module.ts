import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyLayoutComponent } from './core/layouts/empty/empty-layout.component';

import { defaultRoute, authRoutes, mainRoutes } from './app-routes';
import { OptionCLayoutComponent } from './core/layouts/option-c/option-c-layout.component';

const routes: Routes = [
  defaultRoute,
  {
    path: '',
    component: EmptyLayoutComponent,
    children: authRoutes
  },
  {
    path: '',
    component: OptionCLayoutComponent,
    children: mainRoutes
  }
];

@NgModule({
  // Only call RouterModule.forRoot() in the root AppRoutingModule (or the AppModule if that's where you register
  // top level application routes). In any other module, you must call the RouterModule.forChild method to register additional routes.
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    initialNavigation: 'enabled',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
