import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import {CovidInterface} from "../interfaces/covid.interface";
import {BehaviorSubject} from "rxjs";
import {BigCovidProps} from "../interfaces/covid.class";
import {NumbersInterface} from "../interfaces/numbers.interface";
import {deaths} from "../interfaces/numbers.interface";

@Injectable()
export class DashboardsService {

 // https://api.covidtracking.com/v1/us/20201201.json
   private currentApi: string = 'https://api.covidtracking.com/v1/us/current.json';

 private janOneApi: string ='https://api.covidtracking.com/v1/us/20210101.json';
 private novOneApi: string = 'https://api.covidtracking.com/v1/us/20201101.json';
private decOneApi: string = "https://api.covidtracking.com/v1/us/20201201.json";
  private pacovidApi: string = 'https://api.covidtracking.com/v1/states/pa/info.json';
  private njcovidApi: string = 'https://api.covidtracking.com/v1/states/nj/info.json';
  private nycovidApi: string = 'https://api.covidtracking.com/v1/states/ma/info.json';
  private macovidApi: string = 'https://api.covidtracking.com/v1/states/ca/info.json';
  private micovidApi: string = 'https://api.covidtracking.com/v1/states/mi/info.json';
  private covidApi: string = 'https://api.covidtracking.com/v1/us/current.json';
  private baseApi : string = 'https://api.covidtracking.com/v1/us/';
// historical api calls

 private lastDecCovidApi : string = 'https://api.covidtracking.com/v1/us/20201201.json';
  constructor(private http: HttpClient) {
  }

  getCovidByDate(param:NumbersInterface):Observable<NumbersInterface[]> {
      return this.http.get<NumbersInterface[]>(this.baseApi+param + `.json`);
  }

  getCovidDeath():Observable<deaths> {
      return this.http.get<deaths>(this.covidApi);
  }


  // getCovidFields(): Observable<BigCovidProps[]> {
  //   return this.http.get<BigCovidProps[]>(this.covidApi).pipe(
  //       map((res) =>
  //
  //     )
  //   );
  // }

    getCovidYesterday(): Observable<BigCovidProps[]> {
        return this.http.get<BigCovidProps[]>(this.lastDecCovidApi);
    }

  getAllStatesCovid(): Observable<any> {
    return this.http.get<any>(this.covidApi);
  }

  getPACovid(): Observable<any> {
    return this.http.get<any>(this.pacovidApi);
  }
  getDecCovid(): Observable<any> {
    return this.http.get<any>(this.decOneApi);
  }
    getJanCovid(): Observable<any> {
    return this.http.get<any>(this.janOneApi);
  }
     getNovCovid(): Observable<any> {
    return this.http.get<any>(this.novOneApi);
  }

  getNJCovid(): Observable<any> {
    return this.http.get<any>(this.njcovidApi);
  }

  getNYCovid(): Observable<any> {
    return this.http.get<any>(this.nycovidApi);
  }

  getMACovid(): Observable<any> {
    return this.http.get<any>(this.macovidApi);
  }

  getMICovid(): Observable<any> {
    return this.http.get<any>(this.micovidApi);
  }

  // team dashboard
  getTeam(): Observable<any> {
    return this.http.get('/assets/data/team.json');
  }

  // ecommerce dashboard
  getRecentOrdersTableData(): Observable<any> {
    return this.http.get('/assets/data/ecommerce-dashboard/recent-orders-table.json');
  }

  getLatestTicketsTableData(): Observable<any> {
    return this.http.get('/assets/data/ecommerce-dashboard/latest-tickets-table.json');
  }

  // crm dashboard
  getLeadsTableData(): Observable<any> {
    return this.http.get('/assets/data/crm-dashboard/leads-table.json');
  }

  getTopSellersData(): Observable<any> {
    return this.http.get('/assets/data/crm-dashboard/top-sellers.json');
  }

  getLaggingSellersData(): Observable<any> {
    return this.http.get('/assets/data/crm-dashboard/lagging-sellers.json');
  }

  getArticles(): Observable<any> {
    return this.http.get('/assets/data/crm-dashboard/articles.json');
  }

  getTasks(): Observable<any> {
    return this.http.get('/assets/data/crm-dashboard/tasks.json');
  }
}


