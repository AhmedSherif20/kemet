import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, firstValueFrom } from 'rxjs';
import { EventsApiService } from '../../services/events-api.service';
import { SwalAlertService } from 'src/app/services/swal-alert.service';
import { IEvent } from 'src/app/interfaces';
import { redirectToWhatsAppLink } from 'src/app/utils/functions';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit, OnDestroy {
  eventData: IEvent | undefined = undefined;
  loading: boolean = false;

  copyMsg: string = 'Copy Event Url';

  whatsappLink: string = '';

  paramSubscription: Subscription = new Subscription();

  constructor(
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private _eventsApiService: EventsApiService,
    private _SwalAlertService: SwalAlertService
  ) {}

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe((params) => {
      const paramValue = params['id'];
      this.getEventInfo(paramValue);
    });
  }

  async getEventInfo(id: string): Promise<void> {
    try {
      this.loading = true;
      const apiResponse = await firstValueFrom(
        this._eventsApiService.getEventDetails(id)
      );

      if (apiResponse['0'] == 'status=>success') {
        this.eventData = apiResponse.data;

        const whatsappMsg: string = `Hello I want to know more details about ${this.eventData.event_name} event, thank you`;
        this.whatsappLink = redirectToWhatsAppLink(
          this.eventData.contact_phone,
          whatsappMsg
        );

        this.loading = false;
      }

      this.loading = false;
    } catch (error) {
      this.router.navigate(['/events']);
      this._SwalAlertService.fireAlert(
        'error',
        'event not found',
        'please try again later'
      );
      this.loading = false;
    }
  }

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

  getTicket(): void {
    window.open(this.whatsappLink, '_blank');
  }

  ngOnDestroy(): void {
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
  }
}
