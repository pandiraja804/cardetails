import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
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

  constructor(private httpClient: HttpClient) { }

  async getApi(Api_url: string): Promise<Observable<any>> {
    return this.httpClient.get(this.apiURL + Api_url);
  }



}
