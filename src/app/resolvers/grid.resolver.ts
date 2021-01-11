import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {DashboardsService} from "../services/dashboards.service";

@Injectable()
export class RegularTablesResolver implements Resolve<any> {
  constructor(private gridService: DashboardsService) {}
    resolve() {
    return new Promise((resolve, reject) => {
      this.gridService.getAllStatesCovid()
      .subscribe((tableData: any) => {
        return resolve(tableData);
      });
    });
  }
}

@Injectable()
export class CovidTablesResolver implements Resolve<any> {
  constructor(private covidService: DashboardsService) {}
  resolve() {
    return new Promise((resolve, reject) => {
      this.covidService.getAllStatesCovid()
          .subscribe((tableData: any) => {
            return resolve(tableData);
          });
    });
  }
}
