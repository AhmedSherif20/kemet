import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IHotel } from 'src/app/interfaces';
import { hotelsInEgypt } from 'src/app/utils/data';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss'],
})
export class HotelDetailsComponent implements OnInit {
  paramsSubscription: Subscription;

  hotelData: IHotel | undefined = undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      console.log(params);

      if (params['name']) {
        this.hotelData = hotelsInEgypt.filter(
          (hotel: IHotel) => hotel.name == params['name']
        )[0];
      }
    });
  }
}
