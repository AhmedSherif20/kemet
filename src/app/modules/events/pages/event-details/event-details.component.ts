import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent {
  eventData = {
    id: 2,
    event_name: 'Historical Tour',
    event_datetime: '2024-09-10 10:30:00',
    location: 'Historical District',
    description:
      'Explore the rich history of our city with guided tours and reenactments.',
    event_type: 'Historical',
    ticket_price: '15.00',
    ticket_availability: 500,
    accessibility_info: 'Not specified',
    contact_person: 'Jane Smith',
    contact_email: 'jane@example.com',
    contact_phone: '+987654321',
    website_url: 'http://historicaltour.com',
    recommended_age_group: 'Adults and children over 10',
    language: 'English',
    transportation_options: 'Limited parking available',
    nearby_attractions: 'Museum, Old Church',
    social_media_handles: '@historytour',
    hashtags: '#historylover',
    special_requirements: 'Wear comfortable shoes',
    weather_considerations: 'Rain or shine',
    cost_of_participation: '0.00',
    sustainability_initiatives: 'Paperless tickets',
    created_at: '2024-03-04T04:05:22.000000Z',
    updated_at: '2024-03-04T04:05:22.000000Z',
  };

  copyMsg: string = 'Copy Event Url';

  constructor(private _snackBar: MatSnackBar) {}

  copyEventUrl() {
    navigator.clipboard.writeText(window.location.href);
    this.openSnackBar('url copied ✅', '❌');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);

    setTimeout(() => {
      this._snackBar.dismiss();
    }, 3000);
  }
}
