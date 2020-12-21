import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutBreakpointService {
  public screenSizeChangeSubject: ReplaySubject<any> = new ReplaySubject(1);
  public currentScreenSize: string;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    // get current size to initiallize the layout components
    const isSmallScreen = breakpointObserver.isMatched(
      [Breakpoints.XSmall, Breakpoints.Small]
    );
    const isMediumScreen = breakpointObserver.isMatched(
      [Breakpoints.Medium]
    );

    this.currentScreenSize = (isSmallScreen) ? 'small' : (isMediumScreen) ? 'medium' : 'large';

    // Use Angular CDK Breakpoint Observer to detect changes on the screen size
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall] || result.breakpoints[Breakpoints.Small]) {
          this.screenSizeChangeSubject.next('small');
        }

        if (result.breakpoints[Breakpoints.Medium]) {
          this.screenSizeChangeSubject.next('small');
        }

        if (result.breakpoints[Breakpoints.Large] || result.breakpoints[Breakpoints.XLarge]) {
          this.screenSizeChangeSubject.next('small');
        }
      }
    });
  }
}
