import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsSearchComponent } from './pages/hotels-search/hotels-search.component';
import { AvailableHotelsComponent } from './pages/available-hotels/available-hotels.component';
import { HotelDetailsComponent } from './pages/hotel-details/hotel-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RoomsSuitesComponent } from './components/rooms-suites/rooms-suites.component';
import { MainFacilitiesComponent } from './components/main-facilities/main-facilities.component';
import { LocalAmenitiesComponent } from './components/local-amenities/local-amenities.component';
import { HotelBookingComponent } from './components/hotel-booking/hotel-booking.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    HotelsSearchComponent,
    AvailableHotelsComponent,
    HotelDetailsComponent,
    RoomsSuitesComponent,
    MainFacilitiesComponent,
    LocalAmenitiesComponent,
    HotelBookingComponent,
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    NgxPaginationModule,
  ],
})
export class HotelsModule {}
