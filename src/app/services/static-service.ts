import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StaticService {

  constructor(private http: HttpClient) {}

  getRegularTableData(): Observable<any> {
    return this.http.get('../assets/data/regular_table.json');
  }

  getGlobalCovidData(): Observable<any> {
    return this.http.get('../assets/data/covidglobal.json');
  }

  getExtendedTableData(): Observable<any> {
    return this.http.get('../assets/data/extended_table.json');
  }

  getSmartTableData(): Observable<any> {
    return this.http.get('../assets/data/smart_table.json');
  }

  getRecentOrdersTableData(): Observable<any> {
    return this.http.get('../assets/data/covidKpi-dashboard/recent-orders-table.json');
  }
}
