import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IHotel, IHotelQueryParams } from 'src/app/interfaces';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { hotelsInEgypt } from 'src/app/utils/data';
import { getRandomNum } from 'src/app/utils/functions';

@Component({
  selector: 'app-available-hotels',
  templateUrl: './available-hotels.component.html',
  styleUrls: ['./available-hotels.component.scss'],
})
export class AvailableHotelsComponent implements OnInit, OnDestroy {
  egyptianHotelImages = [
    'https://plus.unsplash.com/premium_photo-1692217764140-4f8db35b9f76?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1524932563317-9962c267d8bd?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1524932563317-9962c267d8bd?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1648852231208-21ce6bd2768b?q=80&w=3940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1711111038517-f5d61fe63008?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1614451153800-c141e95b9054?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661962360690-e91cc0df88f1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGVneXB0aW9uJTIwcmVkc2VhJTIwaG90ZWxzfGVufDB8fDB8fHww',
  ];

  queryParams: IHotelQueryParams | undefined = undefined;

  paramsSubscription: Subscription;

  allHotelsData: IHotel[] = hotelsInEgypt;

  displayedHotels: IHotel[] = [];
  p: number = 1;
  itemPerPage: number;

  constructor(
    private route: ActivatedRoute,
    private _responsiveService: ResponsiveService
  ) {}

  ngOnInit(): void {
    console.log(this.allHotelsData);

    this.paramsSubscription = this.route.queryParams.subscribe((params) => {
      this.queryParams = {
        city: params['city'],
        arriveDate: params['arriveDate'],
        leaveDate: params['leaveDate'],
        numOfGuests: +params['numOfGuests'],
      };
      this.displayHotelsViaCity(this.queryParams.city);
    });
  }

  displayHotelsViaCity(city: string): void {
    this.itemPerPage = this._responsiveService.getItemPerPage();

    let filteredHotels: IHotel[] = this.allHotelsData.filter(
      (hotel) => hotel.location == city
    );

    this.displayedHotels = filteredHotels.map((hotel) => ({
      ...hotel,
      rating: Math.floor(hotel.rating),
    }));
  }

  @HostListener('window:resize')
  setItemPerPage() {
    this.itemPerPage = this._responsiveService.getItemPerPage();
  }

  NgxPagination(e: any): void {
    window.scrollTo({
      top: document.getElementById('events')?.offsetTop! - 100,
      behavior: 'smooth',
    });
    this.p = e;
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription) this.paramsSubscription.unsubscribe();
  }

  getRandomNum(max: number, min: number): number {
    return getRandomNum(max, min);
  }

  descriptionSlicer(description: string) {
    // Split the description into words
    const words = description.split(' ');

    // Slice the first 10 words
    const firstTenWords = words.slice(0, 15);

    // Join the words back into a string
    return firstTenWords.join(' ');
  }
}
