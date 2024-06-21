import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherApiService } from '../../services/weather-api.service';
import { firstValueFrom } from 'rxjs';
import { SwalAlertService } from 'src/app/services/swal-alert.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit {
  cityName: string | null = null;
  weatherData: any;
  loading: boolean = true;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _Router: Router,
    private _WeatherApiService: WeatherApiService,
    private _swalAlertService: SwalAlertService
  ) {}

  ngOnInit(): void {
    this.getCityWeather();
  }

  async getCityWeather(): Promise<any> {
    this.cityName = this._activatedRoute.snapshot.params['city'];
    if (!this.cityName) this._Router.navigate(['/weather']);

    this.weatherData = await firstValueFrom(
      this._WeatherApiService.getCityWeather(this.cityName ?? '')
    ).catch((err) => {
      if (!this.weatherData) {
        this.loading = false;
        this._Router.navigate(['/weather']);
        this._swalAlertService.fireAlert(
          'error',
          'error',
          'City Name Incorrect!'
        );
      }
    });

    this.loading = false;
  }
}
