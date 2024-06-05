import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrConverterComponent } from './pages/curr-converter/curr-converter.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CurrConverterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencyRoutingModule {}
