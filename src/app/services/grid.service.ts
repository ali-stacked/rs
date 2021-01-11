import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GridService {
  private covidApi: string = 'https://api.covidtracking.com/v1/us/current.json';
  constructor(private http: HttpClient) {}

  getCovidDataAggregate(): Observable<any> {
    return this.http.get<any>(this.covidApi);
  }
  getData(): Observable<any> {
    return this.http.get('/assets/data/regular_table.json');
  }

}
