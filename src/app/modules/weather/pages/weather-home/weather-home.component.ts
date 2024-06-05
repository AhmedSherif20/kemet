import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalAlertService } from 'src/app/services/swal-alert.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss'],
})
export class WeatherHomeComponent implements OnInit {
  searchInput: FormControl = new FormControl(null);

  constructor(
    private router: Router,
    private _SwalAlertService: SwalAlertService
  ) {}

  ngOnInit(): void {}

  getCityValue() {
    const cityName: string = this.searchInput.value;
    if (!cityName) {
      this._SwalAlertService.fireAlert(
        'warning',
        'city name required',
        'please try again!'
      );
      return;
    }

    console.log(cityName, 'after check');

    this.router.navigate(['/weather', cityName ?? '']);
  }
}
