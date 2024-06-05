import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { AllEventsComponent } from './pages/all-events/all-events.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [AllEventsComponent, EventDetailsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    NgxPaginationModule,
    MaterialModule,
  ],
})
export class EventsModule {}
