import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { EmptyLayoutComponent } from './empty/empty-layout.component';

import { authRoutes, mainRoutes } from 'src/app/app-routes';
import { defaultLayout, availableLayouts, IAppLayout } from 'src/app/app-layouts';

@Injectable({
  providedIn: 'root'
})
export class LayoutsService {
  previousLayout: IAppLayout = defaultLayout;
  currentLayout: IAppLayout = defaultLayout;

  constructor(
    private router: Router,
    private location: Location
  ) { }

  switchLayout(selectedLayoutName: string): void {
    selectedLayoutName = (selectedLayoutName) ? selectedLayoutName : this.currentLayout.name;

    if (selectedLayoutName && selectedLayoutName !== this.currentLayout.name) {
      const selectedLayout: IAppLayout = availableLayouts.find((layout: IAppLayout) => {
        return layout.name === selectedLayoutName;
      });

      if (selectedLayout) {
        this.previousLayout = this.currentLayout;
        this.currentLayout = selectedLayout;

        this.router.resetConfig([
          {
            path: '',
            component: EmptyLayoutComponent,
            children: authRoutes
          },
          {
            path: '',
            component: selectedLayout.component,
            children: mainRoutes
          }
        ]);
        // Use Location to access current path as it's independant from which component got activated
        const currentLocation = this.location.path();

        this.router.navigate([currentLocation]);
      }
    }
  }
}
