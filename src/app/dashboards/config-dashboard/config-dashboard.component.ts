import { Component, OnInit, PLATFORM_ID, Inject, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as echarts from 'echarts/lib/echarts';
// /** echarts theme: */
import '../../../theme/echarts-theme.js';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {Donut} from "../../interfaces/donut";

@Component({
  selector: 'app-config-dashboard',
  templateUrl: './config-dashboard.component.html',
  styleUrls: [
    './styles/config-dashboard.component.scss',
    './styles/config-dashboard.responsive.scss'
  ]
})
export class ConfigDashboardComponent implements OnInit {
donutForm: FormGroup;
  colorScheme = {
    domain: ['#035388', '#40c3f7', '#b3ecff', '#52606d', '#127fbf', '#9aa5b1']
  };

  currentDonut:[];

    usValue: number = 1204;
    ukValue: number = 1348;
    indiaValue: number = 110;
    italyValue: number = 1376;
    chinaValue: number = 3;

  marketingTasksBoardForm: FormGroup;
  completedMarketingTasks: number;

  salesTasksBoardForm: FormGroup;
  completedSalesTasks: number;

  customerSupportTasksBoardForm: FormGroup;
  completedCustomerSupportTasks: number;

  isBrowser: boolean;
  articles: any;
  tasks: any;
  donutData: any;



  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    // tslint:disable-next-line:no-string-literal

    // tslint:disable-next-line:no-string-literal
    this.articles = route.snapshot.data['data'].articles;
    // tslint:disable-next-line:no-string-literal
    this.tasks = route.snapshot.data['data'].tasks;
    // donut values

    this.donutForm = this.formBuilder.group({
          usName: 'United States',
          usValue: 1204,
          ukName: 'United Kingdom',
          ukValue: 1348,
          indiaName: 'India',
          indiaValue: 110,
          italyName: 'Italy',
          italyValue: 1376,
          chinaName: 'China',
          chinaValue: 3
    });

      this.donutForm.get('usValue').valueChanges.subscribe(
          value => this.setUSAValue(value)
      );

      this.donutForm.get('ukValue').valueChanges.subscribe(
          value => this.setUKValue(value)
      );

      this.donutForm.get('indiaValue').valueChanges.subscribe(
          value => this.setIndiaValue(value)
      );

      this.donutForm.get('italyValue').valueChanges.subscribe(
          value => this.setItalyValue(value)
      );

      this.donutForm.get('chinaValue').valueChanges.subscribe(
          value => this.setChinaValue(value)
      );
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

  }


  ngOnInit() {
    // define a custom sort for the last_contact field
      this.donutData =
          [
              {
                  name: 'United States',
                  value: this.usValue
              },
              {
                  name: 'United Kingdom',
                  value: this.ukValue
              },
              {
                  name: 'India',
                  value: this.indiaValue
              },
              {
                  name: 'Italy',
                  value: this.italyValue
              },
              {
                  name: 'China',
                  value: this.chinaValue
              }
          ];

  }

    setUSAValue(value) {
        this.donutData[0].value = value;
    }

    setUKValue(value) {
        this.donutData[1].value = value;
    }
    setIndiaValue(value) {
        this.donutData[2].value = value;
    }
    setItalyValue(value) {
        this.donutData[3].value = value;
    }
    setChinaValue(value) {
      this.donutData[4].value = value;
    }
  //
  // setDonut(donutForm:FormGroup) {
  //     this.donutData = [];
  //     for(let i=0; i< value.length; i++) {
  //         let currentDonut = new Donut();
  //         this.donutData.push(currentDonut);
  //     }
  // }

  getCompletedTasks(form: FormGroup): number {
    return Object.values(form.value).filter(x => x === true).length;
  }

}
