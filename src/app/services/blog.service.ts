import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl: string = environment.BASE_URL;

  constructor(private _rest: ApiService) {
  }
  public getBlogs(): Observable<any> {
    const endPointUrl = '/shows';
    const url = this.baseUrl + endPointUrl;
    return this._rest.getBlogs<any>(url);
  }
}