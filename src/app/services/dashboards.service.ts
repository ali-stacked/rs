import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import {CovidInterface} from "../interfaces/covid.interface";
import {BehaviorSubject} from "rxjs";
import {BigCovidProps} from "../interfaces/covid.class";
import {NumbersInterface} from "../interfaces/numbers.interface";
import {deaths} from "../interfaces/numbers.interface";
import {findAll} from "@angular/compiler-cli/ngcc/src/utils";
import {id} from "@swimlane/ngx-charts/release/utils";


@Injectable()
export class DashboardsService {

    private globalJson: string = "/assets/data/covidglobal.json";
    private rankings: string = "/assets/data/rank.json";
 // https://api.covidtracking.com/v1/us/20201201.json
   private currentApi: string = 'https://api.covidtracking.com/v1/us/current.json';
   private jan5: string = 'https://api.covidtracking.com/v1/us/20210105.json';
    private dec28: string = 'https://api.covidtracking.com/v1/us/20201228.json';
 private janOneApi: string ='https://api.covidtracking.com/v1/us/20210101.json';
 private novOneApi: string = 'https://api.covidtracking.com/v1/us/20201101.json';
private decOneApi: string = "https://api.covidtracking.com/v1/us/20201201.json";
  private pacovidApi: string = 'https://api.covidtracking.com/v1/states/pa/info.json';
  private njcovidApi: string = 'https://api.covidtracking.com/v1/states/nj/info.json';
  private nycovidApi: string = 'https://api.covidtracking.com/v1/states/ma/info.json';
  private macovidApi: string = 'https://api.covidtracking.com/v1/states/ca/info.json';
  private micovidApi: string = 'https://api.covidtracking.com/v1/states/mi/info.json';
  private covidApi: string = 'https://api.covidtracking.com/v1/us/current.json';
  private currentCovidApi: string ='https://api.covidtracking.com/v1/us/current.json';
  private baseApi : string = 'https://api.covidtracking.com/v1/us/';
    private newsApi: string = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e0f7cab22d204d0b9091502244fd8ecf';
    private teamApi: string = '/assets/data/team.json';
    private covidSummaryApi: string = 'https://api.covid19api.com/summary';
// historical api calls

 private lastDecCovidApi : string = 'https://api.covidtracking.com/v1/us/20201201.json';
  constructor(private http: HttpClient) {
  }

    // getPolicyData(): Observable<PolicyModel[]> {
    //     return this.http.get<PolicyModel[]>(this.policyApi).pipe(
    //         map(results => results["policies"])
    //
    //     );
    // }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Access-Token':'5cf9dfd5-3449-485e-b5ae-70a60e997864'
        })
    };

    getCovidSummary(): Observable<any> {
        return this.http.get<any>(this.covidSummaryApi).pipe(
            map(res => res["Countries"])
        );
    }

    getCovidGlobal(): Observable<any> {
        return this.http.get('../assets/data/covidglobal.json');
    }

    getCurrentRank(): Observable<any> {
        return this.http.get<any>('../assets/data/mock-data/idrankings.json');
    }

    getNewRankings(): Observable<any> {
        return this.http.get<any>(this.rankings);
    }
    getCovidByEurope(): Observable<any> {
      return this.http.get<any>(this.globalJson).pipe(
          map(data => {
              data.find(data.region === 'Europe')
          })

      )
    }

    getPlayerById(id:string): Observable<any> {
        const url = `${this.teamApi}/${id}`;
        return this.http.get(url);
    }

    // team detail method

    getTeamById(id: number): Observable<any> {
        const url = `${this.teamApi}/${id}`;
        return this.http.get(url);
    }

  getCovidByDate(param:NumbersInterface):Observable<NumbersInterface[]> {
      return this.http.get<NumbersInterface[]>(this.baseApi+param + `.json`);
  }

    getCovid(): Observable<any> {
        return this.http.get<any>(this.covidApi);
    }
    // filterStates(): Observable<any> {
    //     return this.http.get<any>(this.covidApi).pipe(
    //         map(res => )
    //     )
    // }

    getDeathProp(): Observable<CovidInterface[]> {
        return this.http.get<CovidInterface[]>(this.covidApi).pipe(
            map(result =>
                    result.filter(data => data.death == data.death)
            )
        );
    }

    getCovidTypes(): Observable<CovidInterface> {
      return this.http.get<CovidInterface>(this.covidApi);
    }

  getJan5(): Observable<any> {
      return this.http.get<any>(this.jan5);
  }




    getNewsHeadlines(): Observable<any> {
        return this.http.get<any>(this.newsApi);
    }

    getDec28(): Observable<any> {
        return this.http.get<any>(this.dec28);
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

    getCurrentCovidData():Observable<any> {
        return this.http.get<any>(this.currentCovidApi);
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

  // test - for global api

    getGlobalCovid(): Observable<any> {
      return this.http.get<any>(this.globalJson);
    }


    getAdvisors(): Observable<any> {
        return this.http.get('/assets/data/advisors.json');
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


