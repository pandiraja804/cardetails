import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
declare const $: any;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base: any = "https://demo7952897.mockable.io";

  apiURL: string = this.base;

  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": '*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization',
    }),
  };



  constructor(private httpClient: HttpClient, private router: Router) { }

  async postApi(Api_url: string, data: any): Promise<Observable<any>> {

    return this.httpClient.post(this.apiURL + Api_url, data);

  }
  async getApi(Api_url: string): Promise<Observable<any>> {
    return this.httpClient.get(this.apiURL + Api_url);
  }
  async deleteApi(Api_url: string): Promise<Observable<any>> {

    return this.httpClient.delete(this.apiURL + Api_url);
  }
  async putApi(Api_url: string, data: any): Promise<Observable<any>> {

    return this.httpClient.put(this.apiURL + Api_url, data);
  }

}
