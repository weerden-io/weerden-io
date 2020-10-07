import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getTest(): Observable<string[]> {
    const url = `${environment.apiBaseUrl}/test`;
    return this.http.get<string[]>(url);
  }
}
