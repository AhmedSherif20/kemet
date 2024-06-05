import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherHomeComponent } from './pages/weather-home/weather-home.component';
import { WeatherSearchComponent } from './pages/weather-search/weather-search.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherHomeComponent,
  },
  {
    path: ':city',
    component: WeatherSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
