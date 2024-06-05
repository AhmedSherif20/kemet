import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CurrencyApiService {
  apiKey: string = '854fb0ab714558c7f5c20b40';
  constructor(private _HttpClient: HttpClient) {}

  getCurrency(countryCode: string): Observable<any> {
    return this._HttpClient.get(`
    https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/${countryCode}`);
  }
}
