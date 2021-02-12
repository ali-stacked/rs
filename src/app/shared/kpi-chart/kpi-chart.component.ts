import {Component, PLATFORM_ID, Inject, OnInit} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-kpi-chart',
  templateUrl: './kpi-chart.component.html',
  styleUrls: ['./kpi-chart.component.scss']
})
export class KpiChartComponent {
  isBrowser: boolean;
  verticalBarOptions = {
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: true,
    showGridLines: true,
    barPadding: 50,
    showXAxisLabel: false,
    xAxisLabel: 'Country',
    showYAxisLabel: true,
    yAxisLabel: 'Sales'
  };

  horizontalBarOptions = {
    showXAxis: true,
    showYAxis: true,
    showLegend: true,
    showGridLines: false,
    barPadding: 6,
    groupPadding: 30,
    showXAxisLabel: false,
    xAxisLabel: 'Country',
    showYAxisLabel: false,
    legendPosition: 'right'
  };

  lineChartOptions = {
    showXAxis: true,
    showYAxis: true,
    showLegend: true,
    showGridLines: true,
    showXAxisLabel: false,
    showYAxisLabel: true,
    legendPosition: 'right',
    autoScale: false,
    roundDomains: true
  };

  countriesData: any[];
  countriesData2: any[];
  contestData: any[];
  lineChartData: any[];

  colorScheme = {
    domain: ['#035388', '#40c3f7', '#b3ecff', '#52606d', '#127fbf', '#9aa5b1']
  };

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);

    this.countriesData =
        [
          {
            name: 'India',
            value: 7689
          },
          {
            name: 'USA',
            value: 1204
          },
          {
            name: 'China',
            value: 67
          },
          {
            name: 'Jordan',
            value: 410
          },
          {
            name: 'United Kingdom',
            value: 5169
          }
        ];

    this.countriesData2 =
        [
          {
            name: 'Germany',
            series: [
              {
                name: 'Total Deaths',
                value: 48770
              },
              {
                name: 'Deaths Per Million',
                value: 582
              },
              {
                name: 'Cases Per Million',
                value: 24682
              }
            ]
          },
          {
            name: 'United States',
            series: [
              {
                name: 'Total Deaths',
                value: 398435
              },
              {
                name: 'Deaths Per Million',
                value: 1203
              },
              {
                name: 'Cases Per Million',
                value: 72619
              }
            ]
          },
          {
            name: 'France',
            series: [
              {
                name: 'Total Deaths',
                value: 70951
              },
              {
                name: 'Deaths Per Million',
                value: 1086
              },
              {
                name: 'Cases Per Million',
                value: 44275
              }
            ]
          },
          {
            name: 'United Kingdom',
            series: [
              {
                name: 'Total Deaths',
                value: 91470
              },
              {
                name: 'Deaths Per Million',
                value: 1347
              },
              {
                name: 'Cases Per Million',
                value: 51068
              }
            ]
          }
        ];
    this.contestData =
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

    this.lineChartData =
        [
          {
            name: 'This week',
            series: [
              {
                value: 2303,
                name: 'Mon'
              },
              {
                value: 5616,
                name: 'Tue'
              },
              {
                value: 4862,
                name: 'Wed'
              },
              {
                value: 3658,
                name: 'Thu'
              },
              {
                value: 6089,
                name: 'Fri'
              }
            ]
          },
          {
            name: 'Last week',
            series: [
              {
                value: 2000,
                name: 'Mon'
              },
              {
                value: 4300,
                name: 'Tue'
              },
              {
                value: 5200,
                name: 'Wed'
              },
              {
                value: 3100,
                name: 'Thu'
              },
              {
                value: 4300,
                name: 'Fri'
              }
            ]
          }
        ];
  }// end constructor






//end

}
