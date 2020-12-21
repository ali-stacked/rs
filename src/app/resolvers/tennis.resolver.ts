import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TennisService} from '../services/tennis.service';

@Injectable()
export class TennisResolver implements Resolve<any> {
  constructor(private tennisService: TennisService) {}
  resolve() {
    return new Promise((resolve, reject) => {
      this.tennisService.getGoats()
        .subscribe((tableData: any) => {
          return resolve(tableData);
        });
    });
  }
}

@Injectable()
export class BigDataResolver implements Resolve<any> {
  constructor(private tennisService: TennisService) {}
  resolve() {
    return new Promise((resolve, reject) => {
      this.tennisService.getBigData()
        .subscribe((tableData: any) => {
          return resolve(tableData);
        });
    });
  }
}
