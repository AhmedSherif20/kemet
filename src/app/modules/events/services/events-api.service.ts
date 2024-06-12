import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vars } from 'src/app/enums/vars';

@Injectable({
  providedIn: 'root',
})
export class EventsApiService {
  baseUrl: string = Vars.baseUrl;
  constructor(private _HttpClient: HttpClient) {}

  getAllEvents(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/show-events`);
  }

  getEventDetails(id: string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/get-event/${id}`);
  }
}
