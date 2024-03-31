import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicService {

  constructor(private http: HttpClient) { }

  getRoutes(): Observable<any> {
    return this.http.get<any>('assets/routes.json');
  }
}
