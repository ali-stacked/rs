import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
// /** echarts theme: */
import '../../../theme/echarts-theme.js';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {DashboardsService} from "../../services/dashboards.service";

@Component({
  selector: 'app-team-dashboard',
  templateUrl: './team-dashboard.component.html',
  styleUrls: [
    './styles/crm-dashboard.component.scss',
    './styles/crm-dashboard.responsive.scss'
  ]
})
export class TeamDashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute,
             private service: DashboardsService,
              private formBuilder: FormBuilder
  ) {}
  team: any;

  

  ngOnInit() {
this.team = this.service.getTeam().subscribe((res => {
  this.team = res;
}))

  }



}
