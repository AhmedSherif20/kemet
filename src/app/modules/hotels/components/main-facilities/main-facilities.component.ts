import { Component } from '@angular/core';
import { IHotelFacilities } from 'src/app/interfaces';

@Component({
  selector: 'app-main-facilities',
  templateUrl: './main-facilities.component.html',
  styleUrls: ['./main-facilities.component.scss'],
})
export class MainFacilitiesComponent {
  hotelFacilities: IHotelFacilities[] = [
    {
      icon: 'fa-solid fa-water-ladder',
      name: 'Swimming Pool',
    },
    {
      icon: 'fa-solid fa-wine-bottle',
      name: 'Bar & Restaurant',
    },
    {
      icon: 'fa-solid fa-dog',
      name: 'Pet Allowed',
    },

    {
      icon: 'fa-solid fa-wifi',
      name: 'Wifi / Netflix access',
    },
  ];
}
