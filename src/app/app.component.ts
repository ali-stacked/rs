import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LayoutsService } from './core/layouts/layouts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ali Faqih';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private layoutsService: LayoutsService
  ) {
    // Use Angular CDK Breakpoint Observer to detect changes on the screen size
    this.breakpointObserver.observe([
      Breakpoints.XSmall
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        console.log('mobile mode');

        // Switch to mobile layout
        const mobileLayoutName = 'mobile';
        this.layoutsService.switchLayout(mobileLayoutName);
      } else {
        console.log('prev or default mode');

        // Switch back to previous layout (or the default one)
        const previousLayoutName = this.layoutsService.previousLayout.name;
        this.layoutsService.switchLayout(previousLayoutName);
      }
    });
  }
}
