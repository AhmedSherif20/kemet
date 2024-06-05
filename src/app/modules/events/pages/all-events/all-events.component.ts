import { Component, OnInit } from '@angular/core';
import { EventsApiService } from '../../services/events-api.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { SwalAlertService } from 'src/app/services/swal-alert.service';
// import { router} from

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss'],
})
export class AllEventsComponent implements OnInit {
  allEvents: any[] = [];
  displayedEvents: any[] = [];

  p: number = 1;

  loading = false;

  constructor(
    private _EventsApiService: EventsApiService,
    private _Router: Router,
    private _SwalAlertService: SwalAlertService
  ) {}

  ngOnInit(): void {
    this.getEvents();
  }

  async getEvents(): Promise<void> {
    this.loading = true;
    try {
      let eventsApi = await firstValueFrom(
        this._EventsApiService.getAllEvents()
      );

      if (eventsApi['events'] && eventsApi['events'].length) {
        this.allEvents = eventsApi['events'];
        console.log(this.allEvents);

        this.displayEvents();
        this.loading = false;
      } else {
        this.loading = false;
      }
    } catch (error) {
      // this._Router.navigate(['/']);
      this._SwalAlertService.fireAlert(
        'error',
        'something happen wrong',
        'please try again later'
      );
      this.loading = false;
      this.displayedEvents.length = 0;
    }
  }

  displayEvents(): void {
    this.displayedEvents = this.allEvents;
  }

  NgxPagination(e: any): void {
    window.scrollTo({
      top: document.getElementById('events')?.offsetTop! - 100,
      behavior: 'smooth',
    });
    this.p = e;
  }

  searchEvent(e: any) {
    let searchQuery = e.target.value ?? '';
    this.p = 1;
    if (searchQuery.length) {
      this.displayedEvents = this.allEvents.filter((event) => {
        const lowerCaseEvent = event.event_name.toLowerCase();
        const lowerCaseSearchValue = searchQuery.toLowerCase();
        return (
          lowerCaseEvent.startsWith(lowerCaseSearchValue) ||
          lowerCaseEvent.includes(lowerCaseSearchValue) ||
          event.location.startsWith(searchQuery) ||
          event.location.includes(searchQuery)
        );
      });
    } else {
      this.displayedEvents = this.allEvents;
    }
  }
}
