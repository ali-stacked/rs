import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import {catchError, distinctUntilChanged, map, tap} from 'rxjs/operators';
import {News} from '../interfaces/news.interface';
import {BehaviorSubject} from "rxjs";


@Injectable()
export class NewsService {
    private newsApi: string = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e0f7cab22d204d0b9091502244fd8ecf';
    private covidApi: string = 'https://api.covidtracking.com/v1/us/current.json';


    constructor(private http: HttpClient) {
    }

    getNewsHeadlines(): Observable<any> {
        return this.http.get<any>(this.newsApi);
    }


    getCovidData(): Observable<any> {
        return this.http.get<any>(this.covidApi);
    }






}
