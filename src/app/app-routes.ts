import { Routes, Route } from '@angular/router';

const defaultRoute: Route = {
    path: '', redirectTo: '/home/landing-page', pathMatch: 'full'
  };
const mainRoutes: Routes = [
  {
    path: 'charts',
    loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)
  },
  {
    path: 'records',
    loadChildren: () => import('./records/records.module').then(m => m.RecordsModule)
  },
  {
    path: 'widgets',
    loadChildren: () => import('./widget-library/widget-library.module').then(m => m.WidgetLibraryModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'dashboards',
    loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
  },
  { path: '', redirectTo: '/home/landing-page', pathMatch: 'full' },
  { path: '**', redirectTo: '/home/landing-page' }
];

const authRoutes: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  }
];
export { defaultRoute, mainRoutes, authRoutes};

// export authRoutes after, aws amplify users
