import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GridService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('/assets/data/regular_table.json');
  }

}