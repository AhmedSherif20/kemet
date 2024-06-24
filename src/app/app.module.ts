import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from './modules/material/material.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { OfflineComponent } from './pages/offline/offline.component';
import { MobileAppBannerComponent } from './components/mobile-app-banner/mobile-app-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    TopbarComponent,
    OfflineComponent,
    MobileAppBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    NgxPaginationModule,
    MaterialModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
