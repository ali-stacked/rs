import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {StaticService} from '../services/static-service';

@Injectable()
export class RegularTablesResolver implements Resolve<any> {

  constructor(private tableDataService: StaticService) {}

  resolve() {
    return new Promise((resolve, reject) => {
      this.tableDataService.getRegularTableData()
          .subscribe((tableData: any) => {
            return resolve(tableData);
          });
    });
  }
}


@Injectable()
export class GlobalCovidTablesResolver implements Resolve<any> {

  constructor(private tableDataService: StaticService) {}

  resolve() {
    return new Promise((resolve, reject) => {
      this.tableDataService.getGlobalCovidData()
      .subscribe((tableData: any) => {
        return resolve(tableData);
      });
    });
  }
}

@Injectable()
export class ExtendedTablesResolver implements Resolve<any> {

  constructor(private tableDataService: StaticService) {}

  resolve() {
    return new Promise((resolve, reject) => {
      this.tableDataService.getExtendedTableData()
      .subscribe((tableData: any) => {
        return resolve(tableData);
      });
    });
  }
}

@Injectable()
export class SmartTablesResolver implements Resolve<any> {

  constructor(private tableDataService: StaticService) {}

  resolve() {
    return new Promise((resolve, reject) => {
      this.tableDataService.getSmartTableData()
      .subscribe((tableData: any) => {
        return resolve(tableData);
      });
    });
  }
}

@Injectable()
export class ExternalFiltersTableResolver implements Resolve<any> {

  constructor(private tableDataService: StaticService) {}

  resolve() {
    return new Promise((resolve, reject) => {
      this.tableDataService.getRecentOrdersTableData()
      .subscribe((recentOrdersData: any) => {
        return resolve(recentOrdersData);
      });
    });
  }
}
