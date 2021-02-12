import { Component, PLATFORM_ID, Inject, ViewChild, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as echarts from 'echarts/lib/echarts';
import {NewsService} from '../../services/news.service';
/** echarts theme: */
import '../../../theme/echarts-theme.js';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {DashboardsService} from "../../services/dashboards.service";
import {AngularFirestore} from "@angular/fire/firestore";



@Component({
  selector: 'app-covidkpi-dashboard',
  templateUrl: './covidkpi-dashboard.component.html',
  styleUrls: [
    './styles/covidkpi-dashboard.component.scss',
    './styles/covidkpi-dashboard.responsive.scss'
  ]
})
export class CovidkpiDashboardComponent implements OnInit {

  isBrowser: boolean;
  nameGlobal: string = 'Global';
  coronaNumbers: number[] = [10, 13, 18, 16, 15, 21];
  news;
  rankings;
  globalData:any;
  values: any;
  coronaValues: any = {};
  globalSummary;
  covidMillion;
  europeValues: any = {};
  chartColors: any = {
    success: '#28a745',
    error: '#dc3545',
    neutral: '#666d77',
    white: '#ffffff',
    blue3: '#bad4ff',
    blue4: '#a2c5ff',
    blue5: '#86b4ff',
    blue7: '#3b86fe',
    blue8: '#2e69c9',
    blue9: '#1b3e76'
  };




  constructor(
      @Inject(PLATFORM_ID) private platformId: object,
      private newsService: NewsService,
      private route: ActivatedRoute,
      private firestore: AngularFirestore,
      private service: DashboardsService
  ) {
    this.globalData = this.firestore.collection('global').valueChanges();
    this.covidMillion = this.firestore.collection('covid').valueChanges();
    this.isBrowser = isPlatformBrowser(platformId);

// moved to shared

  }

  ngOnInit() {
  this.getNews();
  this.getGlobalCovid();
  this.getRankings();
  console.log(this.rankings);
  }

  generateSalesTodayXAxis(items: number) {
    const data = [];
    for (let i = 1; i < items; i++) {
      data.push(i.toString());
    }
    return data;
  }

  // getObjValues(object:GlobalCovidGridComponent)


  getGlobalCovid() {
    this.service.getCovidGlobal().subscribe(response => {
      this.coronaValues = response;
    });
  }

  getRankings() {
    this.service.getCurrentRank().subscribe(res => {
      this.rankings = res;
    })
  }

  getGlobalSummary() {
    this.service.getCovidSummary().subscribe(response => {
      this.globalSummary = response;
    });
  }

  getEurope() {
    this.service.getCovidByEurope().subscribe(res => {
      this.europeValues = res;
    })
  }
  getNews(): void {
    this.newsService.getNewsHeadlines().subscribe(result => {
      this.news = result;
    });

  }
}
