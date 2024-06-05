import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  apiKey: string = 'eaa4e5be81fc4312969104114220102';
  constructor(private _HttpClient: HttpClient) {}

  getCityWeather(cityName: string): Observable<any> {
    return this._HttpClient.get(`
    https://api.weatherapi.com/v1/forecast.json?q=${cityName}&days=6&lang=en&key=${this.apiKey}`);
  }
}
