import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DashboardsService } from '../services/dashboards.service';
import { forkJoin } from 'rxjs';


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
              USA: data[0],
              team: data[1],
              NY: data[2],
              NJ: data[3],
              PA: data[4],
              MI: data[5],
              MA: data[6]

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
        this.dashboardService.getTeam(),
        this.dashboardService.getAllStatesCovid(),
        this.dashboardService.getNYCovid(),
        this.dashboardService.getNJCovid(),
        this.dashboardService.getPACovid(),
        this.dashboardService.getMICovid(),
        this.dashboardService.getMACovid(),
        this.dashboardService.getDecCovid(),
        this.dashboardService.getJanCovid(),
        this.dashboardService.getNovCovid()

      ])
      .subscribe((data: any) => {
        return resolve({
          leadsData: data[0],
          topSellers: data[1],
          laggingSellers: data[2],
          articles: data[3],
          tasks: data[4],
          team: data[5],
          NY: data[6],
          NJ: data[7],
          PA: data[8],
          MI: data[9],
          MA: data[10],
          nov: data[11],
          dec: data[12],
          jan: data[13],
          covid: data[14]

        });
      });
    });
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
