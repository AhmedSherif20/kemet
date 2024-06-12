import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrewRoutingModule } from './crew-routing.module';
import { AllCrewComponent } from './pages/all-crew/all-crew.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from '../material/material.module';
import { AgentComponent } from './pages/agent/agent.component';

@NgModule({
  declarations: [AllCrewComponent, AgentComponent],
  imports: [
    CommonModule,
    CrewRoutingModule,
    NgxPaginationModule,
    MaterialModule,
  ],
})
export class CrewModule {}
