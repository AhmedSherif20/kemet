import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.scss'],
})
export class HotelBookingComponent {
  adultsNum: number = 1;
  childsNum: number = 0;

  changeCounter(
    variableName: 'adultsNum' | 'childsNum',
    operation: '+' | '-'
  ): void {
    if (operation === '-') {
      if (this[variableName] === 0) return;

      this[variableName]--;
    }
    if (operation === '+') {
      this[variableName]++;
    }
  }
}
