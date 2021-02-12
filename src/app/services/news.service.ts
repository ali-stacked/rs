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
    private API_KEY: string = 'e0f7cab22d204d0b9091502244fd8ecf';
    private api_key: string = 'e0f7cab22d204d0b9091502244fd8ecf';

    constructor(private http: HttpClient) {
    }

    getNewsHeadlines(): Observable<any> {
        return this.http.get<any>(this.newsApi);
    }

    getNews() {
        return this.http.get(this.newsApi);
    }

    initArticles(){
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
    }

    initSources(){
        return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
    }

    getArticlesByID(source: String){
        return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
    }

    public getTechNews(){
        return this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
    }
    getCovidData(): Observable<any> {
        return this.http.get<any>(this.covidApi);
    }






}
