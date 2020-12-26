import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {News} from '../interfaces/news.interface';

@Injectable()
export class NewsService {

    constructor(private http: HttpClient) {
    }
    getTopNews(): Observable<any> {
        return this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e0f7cab22d204d0b9091502244fd8ecf`).pipe(
            map((result: any) =>
            result.articles));
    }

    getTheNews(): Observable<any> {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=e0f7cab22d204d0b9091502244fd8ecf');
    }

}
