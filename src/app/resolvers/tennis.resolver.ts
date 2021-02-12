import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { TennisService} from '../services/tennis.service';
import {DashboardsService} from "../services/dashboards.service";

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

@Injectable()
export class PlayerResolver implements Resolve<any> {
  constructor(private tennisService: TennisService) {}
  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    return this.tennisService.getPlayer(route.paramMap.get('id'));
  }
}
