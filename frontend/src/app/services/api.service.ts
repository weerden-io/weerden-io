import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import * as Parser from 'rss-parser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getRSSFeed(): Observable<Parser.Output> {
    const url = `${environment.apiBaseUrl}/rss`;
    return this.http.get<Parser.Output>(url);
  }
}
