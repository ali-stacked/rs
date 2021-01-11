import { Component, OnInit, PLATFORM_ID, Inject, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as echarts from 'echarts/lib/echarts';
// /** echarts theme: */
import '../../../theme/echarts-theme.js';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DashboardsService } from "../../services/dashboards.service";
import { CovidInterface } from "../../interfaces/covid.interface";

@Component({
  selector: 'app-covid-dashboard',
  templateUrl: './covid-dashboard.component.html',
  styleUrls: [
    './styles/crm-dashboard.component.scss',
    './styles/crm-dashboard.responsive.scss'
  ]
})
export class CovidDashboardComponent implements OnInit {
  //  browser boolean conditional
    isBrowser: boolean;
    // state objects populated by resolver / route snapshot ,any type - implicit
  ny: any;
  nj: any;
  mi: any;
  ma: any;
  pa: any;

  covidItems: CovidInterface[] = [];


  covidArray: [];

  // covid object properties
  states:number;
  positive: number;
  negative: number;
  pending: number;
  hospitalizedCurrently:any;
  hospitalizedCumulative:any;
  inIcuCurrently:number;
  inIcuCumulative:any;
  onVentilatorCurrently:any;
  onVentilatorCumulative:number;
  recovered:number;
  dateChecked:string;
  death:number;
  hospitalized:any;
  totalTestResults: number;
  lastModified: string;
  total:any;
  posNeg:number;

  hospitalizedIncrease:number;
  negativeIncrease: number;
  positiveIncrease:number;
  totalTestResultsIncrease:number
  deathIncrease: any;

// form group created to subscribe realtime when value changes on inputs
  // Marketing
  marketingTasksBoardForm: FormGroup;
  completedMarketingTasks: number;

// form group created Tasks
  salesTasksBoardForm: FormGroup;
  completedSalesTasks: number;

// form group created Support
  customerSupportTasksBoardForm: FormGroup;
  completedCustomerSupportTasks: number;


  hotpropDeath: any;
  statistics: any;
  topSellers: any;
  laggingSellers: any;
  articles: any;
  tasks: any;
  today: any;
  covidData: any;
  date: string;
  aliDate:any
  dateNumber:any;
  dataSource:any;
  displayedColumns: string[] = [ 'date', 'states', 'positive',
    'negative', 'deathIncrease', 'recovered'];

  // TableDisplayedColumns: string[] = [ 'name', 'email', 'source', 'mobile', 'last_contact', 'stage', 'actions'];
  leadsTableDataSource: any;
  covidKpiSource: any;

  originalData:[];


  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private route: ActivatedRoute,
    private dashboardService: DashboardsService,
    private formBuilder: FormBuilder
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    // covidData stored in
    this.originalData = route.snapshot.data['data'].covidData;

    this.dataSource = new MatTableDataSource<CovidInterface>(this.originalData);


    // data for dashboard grid coming from get all covid

    // this.leadsMiniChartOptions = new MatTableDataSource(route.snapshot.data.covidData);


    // new jersey route data
    this.nj = route.snapshot.data['data'].NJ;

    // michigan route data
    this.mi = route.snapshot.data['data'].MI;

    // new york route data
    this.ny = route.snapshot.data['data'].NY;

    // massachusetts route data
    this.ma = route.snapshot.data['data'].MA;

    // Pennsylvania route data
    this.pa = route.snapshot.data['data'].PA;

    // marketing tasks
    this.marketingTasksBoardForm = this.formBuilder.group({
      task1: new FormControl(false),
      task2: new FormControl(true),
      task3: new FormControl(false)
    });

    this.completedMarketingTasks = this.getCompletedTasks(this.marketingTasksBoardForm);
    this.marketingTasksBoardForm.valueChanges.subscribe(val => {
      this.completedMarketingTasks = this.getCompletedTasks(this.marketingTasksBoardForm);
    });

    // sales tasks
    this.salesTasksBoardForm = this.formBuilder.group({
      task1: new FormControl(false),
      task2: new FormControl(false)
    });

    this.completedSalesTasks = this.getCompletedTasks(this.salesTasksBoardForm);

    this.salesTasksBoardForm.valueChanges.subscribe(val => {
      this.completedSalesTasks = this.getCompletedTasks(this.salesTasksBoardForm);
    });

    // customer support tasks
    this.customerSupportTasksBoardForm = this.formBuilder.group({
      task1: new FormControl(false),
      task2: new FormControl(false),
      task3: new FormControl(false)
    });

    this.completedCustomerSupportTasks = this.getCompletedTasks(this.customerSupportTasksBoardForm);
    this.customerSupportTasksBoardForm.valueChanges.subscribe(val => {
      this.completedCustomerSupportTasks = this.getCompletedTasks(this.customerSupportTasksBoardForm);
    });

    this.statistics = [
      {
        name: 'Leads',
        value: 1009,
        valueChange: 80,
        positive: false,
        miniChartOptions: this.leadsMiniChartOptions
      },
      {
        name: 'Prospects',
        value: 345,
        valueChange: 54,
        positive: true,
        miniChartOptions: this.prospectsMiniChartOptions
      },
      {
        name: 'Clients',
        value: 128,
        valueChange: 19,
        positive: true,
        miniChartOptions: this.clientsMiniChartOptions
      },
      {
        name: 'Leads to prospects',
        value: '34%',
        valueChange: '5%',
        positive: true,
        miniChartOptions: this.leadsToProspectsMiniChartOptions
      },
      {
        name: 'Prospects to clients',
        value: '37%',
        valueChange: '6%',
        positive: false,
        miniChartOptions: this.prospectToClientMiniChartOptions
      }
    ];
  }

  clientsMiniChartOptions = {
    grid: {
      left: 10,
      right: 10,
    },
    xAxis : [
      {
        type: 'category',
        show: false,
        boundaryGap: false
      }
    ],
    yAxis : [
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

  leadsToProspectsMiniChartOptions = {
    grid: {
      left: 10,
      right: 10,
    },
    xAxis : [
      {
        type: 'category',
        show: false,
        boundaryGap: false
      }
    ],
    yAxis : [
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
        data: [5, 13, 18, 5, 15, 21],
        showSymbol: false,
        itemStyle: {
          color: '#38d997'
        }
      }
    ]
  };

  prospectsMiniChartOptions = {
    grid: {
      left: 10,
      right: 10,
    },
    xAxis : [
      {
        type: 'category',
        show: false,
        boundaryGap: false
      }
    ],
    yAxis : [
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
        data: [5, 8, 10, 8, 12, 16, 12, 18, 21],
        showSymbol: false,
        itemStyle: {
          color: '#38d997'
        }
      }
    ]
  };

  prospectToClientMiniChartOptions = {
    grid: {
      left: 10,
      right: 10
    },
    xAxis : [
      {
        type: 'category',
        show: false,
        boundaryGap: false
      }
    ],
    yAxis : [
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
        data: [18, 15, 12, 16, 13, 8],
        showSymbol: false,
        itemStyle: {
          color: '#ff0e18'
        }
      }
    ]
  };

  leadsMiniChartOptions = {
    grid: {
      left: 10,
      right: 10
    },
    xAxis : [
      {
        type: 'category',
        show: false,
        boundaryGap: false
      }
    ],
    yAxis : [
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
        data: [25, 16, 20, 16, 20, 14],
        showSymbol: false,
        itemStyle: {
          color: '#ff0e18'
        }
      }
    ]
  };

  referralSourceChartOptions = {
    tooltip : {
      trigger: 'axis',
      borderColor: '#FFF',
      padding: [10, 20],
      extraCssText: 'box-shadow: 0px 2px 10px #00000012;',
      axisPointer: {
        type: 'line',
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
      data: ['Leads', 'Prospects', 'Clients'],
      textStyle: {
        fontSize: 15
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
    xAxis : [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      }
    ],
    yAxis : [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Leads',
        type: 'line',
        data: [420, 532, 501, 534, 690, 730, 620, 770, 750, 810, 869, 800],
        symbol: 'circle',
        itemStyle: {
          normal: {
            color: '#3b86ff'
          }
        }
      },
      {
        name: 'Prospects',
        type: 'line',
        data: [160, 200, 170, 160, 230, 255, 200, 240, 250, 300, 201, 250],
        symbol: 'circle',
        itemStyle: {
          normal: {
            color: '#38d997'
          }
        }
      },
      {
        name: 'Clients',
        type: 'line',
        data: [50, 70, 55, 60, 81, 88, 70, 91, 45, 90, 60, 89],
        symbol: 'circle',
        itemStyle: {
          normal: {
            color: '#ffc200'
          }
        }
      }
    ]
  };

  activityOverviewChartOptions = {
    tooltip : {
      trigger: 'axis'
    },
    grid: {
      left: '2%',
      right: '2%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      boundaryGap: false
    },
    yAxis: [
      {
        name: 'Conversion',
        type: 'value',
        position: 'left',
        min: 0,
        max: 100,
        axisLabel: {
          formatter: '{value}%'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      {
        name: 'Dedication',
        type: 'value',
        position: 'right',
        min: 0,
        axisLabel: {
          formatter: '{value}h.'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }
      }
    ],
    legend: {
      show: true
    },
    series: [
      {
        name: 'Dedication',
        data: [1254, 1000, 1250, 930, 1000, 1100, 1254, 1000, 1300, 900, 1000, 1100],
        type: 'line',
        smooth: true,
        symbol: 'none',
        yAxisIndex: 1,
        lineStyle: {
          normal: {
            color: '#3B86FF'
          }
        },
        itemStyle: {
          normal: {
            color: '#3B86FF'
          }
        },
      },
      {
        name: 'Conversion',
        data: [29, 36, 39, 29, 25, 30, 40, 36, 39, 29, 25, 30],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        yAxisIndex: 0,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#38d997'
            }, {
              offset: 1,
              color: '#FFF'
            }])
          }
        },
        itemStyle: {
          normal: {
            color: '#38d997'
          }
        },
        lineStyle: {
          normal: {
            color: '#38d997'
          }
        }
      }
    ]
  };

  ngOnInit() {

    this.getDate();
    // define a custom sort for the last_contact field
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'last_contact': return new Date(item.last_contact);
        default: return item[property];
      }
    };

  }

  getDate():void {
    this.today = new Date();
  }




  getCompletedTasks(form: FormGroup): number {
    return Object.values(form.value).filter(x => x === true).length;
  }
}
