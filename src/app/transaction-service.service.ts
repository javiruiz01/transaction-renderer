import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.url;
  }

  fetchAll(): Observable<any> {
    return this._http.get(this.url);
  }

  fetchOptions(action: string, currency: string): Observable<any> {
    let params = new HttpParams();
    if (action) { params.set('action', action); }
    if (currency) { params.set('currency', currency); }
    return this._http.get(this.url, { params });
  }
}
