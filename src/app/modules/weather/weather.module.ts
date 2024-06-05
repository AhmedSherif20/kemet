import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherHomeComponent } from './pages/weather-home/weather-home.component';
import { WeatherSearchComponent } from './pages/weather-search/weather-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [WeatherHomeComponent, WeatherSearchComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
})
export class WeatherModule {}
