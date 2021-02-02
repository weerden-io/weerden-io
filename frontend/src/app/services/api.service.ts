import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RssFeedResponse } from './api.service.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getRSSFeed(): Observable<RssFeedResponse> {
    const url = `${environment.apiBaseUrl}/rss`;
    return this.http.get<RssFeedResponse>(url);
  }
}
