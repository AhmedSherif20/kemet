import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCrewComponent } from './pages/all-crew/all-crew.component';

const routes: Routes = [
  {
    path: '',
    component: AllCrewComponent,
  },
  {
    path: '**',
    component: AllCrewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrewRoutingModule {}
