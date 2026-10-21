import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { RssFeedResponse } from './api.service.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);

  getRSSFeed(): Observable<RssFeedResponse> {
    const url = `${environment.apiBaseUrl}/rss`;
    return this.http.get<RssFeedResponse>(url);
  }
}
