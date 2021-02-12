import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { DashboardsService } from '../services/dashboards.service';
import { forkJoin } from 'rxjs';


@Injectable()
export class InsightsResolver implements Resolve<any> {
  constructor(private dashboardService: DashboardsService) {}
    resolve() {
    return new Promise((resolve, reject) => {
      this.dashboardService.getArticles()
      .subscribe((data: any) => {
        return resolve(data);
      });
    });
  }
}
@Injectable()
export class EcommerceDashboardResolver implements Resolve<any> {
  constructor(private dashboardService: DashboardsService) {}
  resolve() {
    return new Promise((resolve, reject) => {
      forkJoin([
        this.dashboardService.getRecentOrdersTableData(),
        this.dashboardService.getLatestTicketsTableData()
      ])
      .subscribe((data: any) => {
        return resolve({
          recentOrdersData: data[0],
          latestTicketsData: data[1]
        });
      });
    });
  }
}
@Injectable()
export class DataVizResolver implements Resolve<any> {
  constructor(private dashboardService: DashboardsService) {}
  resolve() {
    return new Promise((resolve, reject) => {
      forkJoin([
        this.dashboardService.getAllStatesCovid(),
        this.dashboardService.getTeam(),
        this.dashboardService.getNYCovid(),
        this.dashboardService.getNJCovid(),
        this.dashboardService.getPACovid(),
        this.dashboardService.getMICovid(),
        this.dashboardService.getMACovid()
      ])
          .subscribe((data: any) => {
            return resolve({
              current: data[0],
              team: data[1],
              NY: data[2],
              NJ: data[3],
              PA: data[4],
              MI: data[5],
              MA: data[6],
              dec28:data[7],
              jan5:data[8]

            });
          });
    });
  }
}


@Injectable()
export class crmDashboardResolver implements Resolve<any> {

  constructor(private dashboardService: DashboardsService) {}

  resolve() {
    return new Promise((resolve, reject) => {
      forkJoin([

        this.dashboardService.getArticles(),
        this.dashboardService.getTasks(),
        this.dashboardService.getAllStatesCovid(),
          this.dashboardService.getAdvisors()
      ])
          .subscribe((data: any) => {
            return resolve({
              articles: data[1],
              tasks: data[2],
              covid: data[3],
              advisors:data[4]
            });
          });
    });
  }
}

@Injectable()
export class CrmDashboardResolver implements Resolve<any> {

  constructor(private dashboardService: DashboardsService) {}

  resolve() {
    return new Promise((resolve, reject) => {
      forkJoin([
        this.dashboardService.getLeadsTableData(),
        this.dashboardService.getTopSellersData(),
        this.dashboardService.getLaggingSellersData(),
        this.dashboardService.getArticles(),
        this.dashboardService.getTasks(),
        this.dashboardService.getAllStatesCovid(),
        this.dashboardService.getAdvisors()
      ])
          .subscribe((data: any) => {
            return resolve({
              leadsData: data[0],
              topSellers: data[1],
              laggingSellers: data[2],
              articles: data[3],
              tasks: data[4],
              covid:data[5],
              advisors:data[6]
            });
          });
    });
  }
}

@Injectable()
export class PlayerDetailResolver implements Resolve<any> {
  constructor(private dashboardService: DashboardsService) {}
  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    return this.dashboardService.getPlayerById(route.paramMap.get('id'));
  }
}

@Injectable()
export class TeamDetailResolver implements Resolve<any> {
  constructor(private dashboardService: DashboardsService) {}
  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    return this.dashboardService.getTeamById(+route.paramMap.get('id'));
  }
}


// @Injectable()
// export class StraightNastyCovidResolver implements Resolve<any> {
//   constructor(private dashboardService: DashboardsService) {}
//   resolve() {
//     return new Promise((resolve, reject) => {
//       forkJoin([
//         this.dashboardService.getLeadsTableData(),
//         this.dashboardService.getTopSellersData(),
//         this.dashboardService.getLaggingSellersData(),
//         this.dashboardService.getArticles(),
//         this.dashboardService.getTasks(),
//         this.dashboardService.getTeam()
//       ])
//           .subscribe((data: any) => {
//             return resolve({
//               leadsData: data[0],
//               topSellers: data[1],
//               laggingSellers: data[2],
//               articles: data[3],
//               tasks: data[4],
//               team: data[5]
//             });
//           });
//     });
//   }
// }
