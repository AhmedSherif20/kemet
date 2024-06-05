import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vars } from 'src/app/enums/vars';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  baseUrl: string = Vars.baseUrl;

  constructor(private _HttpClient: HttpClient) {}

  userLogin(data: any) {
    return this._HttpClient.post(`${this.baseUrl}/login`, data);
  }
  userRegister(data: any) {
    return this._HttpClient.post(`${this.baseUrl}/register`, data);
  }
}
