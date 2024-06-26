import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'weather',
    loadChildren: () =>
      import('./modules/weather/weather.module').then((m) => m.WeatherModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./modules/events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'hotels',
    loadChildren: () =>
      import('./modules/hotels/hotels.module').then((m) => m.HotelsModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'crew',
    loadChildren: () =>
      import('./modules/crew/crew.module').then((m) => m.CrewModule),
  },
  {
    path: 'find-nearest',
    loadChildren: () =>
      import('./modules/find-nearest/find-nearest.module').then(
        (m) => m.FindNearestModule
      ),
  },
  {
    path: 'currency',
    loadChildren: () =>
      import('./modules/currency/currency.module').then(
        (m) => m.CurrencyModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
