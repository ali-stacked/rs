import { Component, OnInit, PLATFORM_ID, Inject, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as echarts from 'echarts/lib/echarts';
// /** echarts theme: */
import '../../../theme/echarts-theme.js';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import {CovidInterface} from "../../interfaces/covid.interface";
import {DashboardsService} from "../../services/dashboards.service";
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-crm-dashboard',
  templateUrl: './crm-dashboard.component.html',
  styleUrls: [
    './styles/crm-dashboard.component.scss',
    './styles/crm-dashboard.responsive.scss'
  ]
})
export class CrmDashboardComponent implements OnInit {

  covidObj: any;
  public covidStore = new MatTableDataSource<CovidInterface>();
  covidSource: CovidInterface [];
  isBrowser: boolean;
  today: any;
  statistics: any;
  covidStats: any;


  covid: any;
  leadsTableDisplayedColumns: string[] = ['states', 'death',
    'positive', 'inIcuCumulative', 'onVentilatorCurrently', 'deathIncrease', 'hospitalized'];
  leadsTableDataSource: any;

  @ViewChild('leadsSort', {static: true}) leadsSort: MatSort;
  @ViewChild('leadsPaginator', {static: true}) leadsPaginator: MatPaginator;

  constructor(
      @Inject(PLATFORM_ID) private platformId: object,
      private route: ActivatedRoute,
      private news: NewsService,
      private dashboardService: DashboardsService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    // tslint:disable-next-line:no-string-literal
    this.leadsTableDataSource = new MatTableDataSource(route.snapshot.data['data'].covid);
    // tslint:disable-next-line:no-string-literal
  }
  clientsMiniChartOptions = {
    grid: {
      left: 10,
      right: 10,
    },
    xAxis: [
      {
        type: 'category',
        show: false,
        boundaryGap: false
      }
    ],
    yAxis: [
      {
        type: 'value',
        show: false
      }
    ],
    series: [
      {
        name: 'mini chart',
        type: 'line',
        smooth: true,
        data: [10, 13, 15, 20, 15, 21],
        showSymbol: false,
        itemStyle: {
          color: '#38d997'
        }
      }
    ]
  };
  referralSourceChartOptions = {
    tooltip: {
      trigger: 'axis',
      borderColor: '#FFF',
      padding: [10, 20],
      extraCssText: 'box-shadow: 0px 2px 10px #00000012;',
      axisPointer: {
        type: 'pie',
        label: {
          show: true,
          backgroundColor: '#CCF7E5',
          color: '#38D997',
          shadowBlur: 0,
          padding: [5, 15, 5, 15]
        }
      },
      textStyle: {
        color: '#9AA5B1'
      }

    },
    legend: {
      type: 'plain',
      orient: 'vertical',
      icon: 'circle',
      left: 'left',
      top: 'middle',
      data: ['Positive Cases', 'Deaths', 'Hospitalizations'],
      textStyle: {
        fontSize: 19
      },
      itemHeight: 20
    },
    grid: {
      left: '15%',
      right: '1%',
      bottom: '1%',
      top: '4%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Oct', 'Nov', 'Dec', 'Jan'],
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Positive',
        type: 'line',
        data: [3, 7487, 567, 5786],
        symbol: 'circle',
        itemStyle: {
          normal: {
            color: '#3b86ff'
          }
        }
      },
      {
        name: 'Deaths',
        type: 'line',
        data: [160, 200, 170, 160],
        symbol: 'circle',
        itemStyle: {
          normal: {
            color: '#38d997'
          }
        }
      },
      {
        name: 'Hospitalizations',
        type: 'line',
        data: [50, 70, 55, 60],
        symbol: 'circle',
        itemStyle: {
          normal: {
            color: '#ffc200'
          }
        }
      }
    ]
  };


  ngOnInit() {
    this.getDate();
    this.getNews();
    this.getCurrent();
    // define a custom sort for the last_contact field
    this.leadsTableDataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'last_contact': return new Date(item.last_contact);
        default: return item[property];
      }
    };
    this.leadsTableDataSource.sort = this.leadsSort;
    this.leadsTableDataSource.paginator = this.leadsPaginator;
  }

  getDate(): void {
    this.today = new Date();
  }

  public getCurrentCovidData = () => {
      this.dashboardService.getAllStatesCovid()
          .subscribe(res => {
            this.covidStore.data = res as CovidInterface[];
          });
    }

    getCurrent() {
    this.dashboardService.getCurrentCovidData().subscribe(res => {
      this.covidObj = res;
    });
    }


  getNews(): void {
    this.news.getNewsHeadlines().subscribe(result => {
      this.news = result;
    });
  }



}
