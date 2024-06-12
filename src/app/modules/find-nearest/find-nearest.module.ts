import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindNearestRoutingModule } from './find-nearest-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PlacesComponent } from './pages/places/places.component';
import { MaterialModule } from '../material/material.module';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [HomeComponent, PlacesComponent],
  imports: [
    CommonModule,
    FindNearestRoutingModule,
    MaterialModule,
    GoogleMapsModule,
  ],
})
export class FindNearestModule {}
