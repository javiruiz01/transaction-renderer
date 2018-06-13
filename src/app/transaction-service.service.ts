import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  url: string;
  header: HttpHeaders;

  constructor(private _http: HttpClient) {
    this.url = 'https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions';
    this.header = new HttpHeaders({ 'Authorization': `Basic ${btoa('code-challenge:payvisioner')}` });
  }

  fetchAll(): Observable<any> {
    return this._http.get(this.url, {headers: this.header});
  }
}
