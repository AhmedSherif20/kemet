import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vars } from 'src/app/enums/vars';
import { IUserData } from 'src/app/interfaces';
@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  baseUrl: string = Vars.baseUrl;
  constructor(private _HttpClient: HttpClient) {}

  getUserById(id: string): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/get-user`, {
      user_id: id,
    });
  }

  updateUserData(data: any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/update-user`, data);
  }
}
