import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vars } from 'src/app/enums/vars';

@Injectable({
  providedIn: 'root',
})
export class CrewApiService {
  baseUrl: string = Vars.baseUrl;
  constructor(private _HttpClient: HttpClient) {}

  getAllCrew(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/crew-hire`);
  }

  getRandomAIPhoto(): Observable<any> {
    return this._HttpClient.get(
      `https://100k-faces.glitch.me/random-image-url`
    );
  }
}
