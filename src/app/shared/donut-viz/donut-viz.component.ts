import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-donut-viz',
  templateUrl: './donut-viz.component.html',
  styleUrls: ['./donut-viz.component.scss']
})
export class DonutVizComponent implements OnInit {
  isBrowser: boolean;
  donutData: any[];
  colorScheme = {
    domain: ['#035388', '#40c3f7', '#b3ecff', '#52606d', '#127fbf', '#9aa5b1']
  };
  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.donutData =
        [
          {
            name: 'United States',
            value: 1204
          },
          {
            name: 'United Kingdom',
            value: 1348
          },
          {
            name: 'India',
            value: 110
          },
          {
            name: 'Italy',
            value: 1376
          },
          {
            name: 'China',
            value: 3
          }
        ];

  }

  ngOnInit() {
  }

}
