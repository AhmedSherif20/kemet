import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsSearchComponent } from './pages/hotels-search/hotels-search.component';
import { AvailableHotelsComponent } from './pages/available-hotels/available-hotels.component';
import { HotelDetailsComponent } from './pages/hotel-details/hotel-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HotelsSearchComponent,
  },
  {
    path: 'search',
    component: AvailableHotelsComponent,
  },
  {
    path: 'details/:name',
    component: HotelDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelsRoutingModule {}
