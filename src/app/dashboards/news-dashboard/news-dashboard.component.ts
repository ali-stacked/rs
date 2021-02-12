import { Component, OnInit, PLATFORM_ID, Inject, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as echarts from 'echarts/lib/echarts';
import {NewsService} from '../../services/news.service';
import '../../../theme/echarts-theme.js';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {DashboardsService} from "../../services/dashboards.service";


@Component({
  selector: 'app-team-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: [
    './styles/crm-dashboard.component.scss',
    './styles/crm-dashboard.responsive.scss'
  ]
})
export class NewsDashboardComponent implements OnInit {
  isBrowser: boolean;
  date: any;
  news;
  articles;
  constructor(private service: NewsService) {
}

  ngOnInit() {
    this.getTodayDate();
    this.service.getNews().subscribe(result => {
      console.log(result);
      this.news = result['articles'];
    });

    this.service.getTechNews().subscribe(result => {
      console.log(result);
      this.articles = result['articles'];
    });

  }


  getTodayDate(): void {
  this.date = new Date();
  }



}
