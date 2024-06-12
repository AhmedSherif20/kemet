import { Component } from '@angular/core';
interface Place {
  name: string;
  type: string;
  icon: string;
}
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
})
export class PlacesComponent {
  placesTypes: Place[] = [
    { name: 'Restaurants', type: 'restaurant', icon: 'fas fa-utensils' },
    { name: 'Cafes', type: 'cafe', icon: 'fas fa-coffee' },
    { name: 'Bars', type: 'bar', icon: 'fas fa-glass-martini' },
    { name: 'Hotels', type: 'hotel', icon: 'fas fa-hotel' },
    { name: 'Lodgings', type: 'lodging', icon: 'fas fa-bed' },
    { name: 'Hospitals', type: 'hospital', icon: 'fas fa-hospital' },
    { name: 'Doctors', type: 'doctor', icon: 'fas fa-user-md' },
    {
      name: 'Pharmacies',
      type: 'pharmacy',
      icon: 'fas fa-prescription-bottle-alt',
    },
    { name: 'Schools', type: 'school', icon: 'fas fa-school' },
    { name: 'Universities', type: 'university', icon: 'fas fa-university' },
    { name: 'Banks', type: 'bank', icon: 'fas fa-university' },
    { name: 'ATMs', type: 'atm', icon: 'fas fa-money-check-alt' },
    { name: 'Parks', type: 'park', icon: 'fas fa-tree' },
    { name: 'Stores', type: 'store', icon: 'fas fa-store' },
    {
      name: 'Shopping Malls',
      type: 'shopping_mall',
      icon: 'fas fa-shopping-mall',
    },
    { name: 'Gyms', type: 'gym', icon: 'fas fa-dumbbell' },
    { name: 'Churches', type: 'church', icon: 'fas fa-church' },
    { name: 'Mosques', type: 'mosque', icon: 'fas fa-mosque' },
    { name: 'Synagogues', type: 'synagogue', icon: 'fas fa-synagogue' },
    {
      name: 'Hindu Temples',
      type: 'hindu_temple',
      icon: 'fas fa-place-of-worship',
    },
  ];

  placeType: string | undefined = undefined;

  center: google.maps.LatLngLiteral | undefined;
  zoom = 4;
  places: google.maps.places.PlaceResult[] = [];

  loading: boolean = false;

  dotIcon = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: '#11487E', // يمكنك تغيير اللون هنا
    fillOpacity: 1,
    scale: 10,
    strokeColor: 'white',
    strokeWeight: 3,
  };

  changePlaces(place: string, name: string): void {
    console.log(place);

    if (!place) return;

    if (this.loading) {
      return;
    }

    this.placeType = name;

    this.setCurrentLocation(place);
  }

  setCurrentLocation(type: string) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.zoom = 14;
          this.loading = true;
          this.findNearbyPlaces(type);
        },
        (error) => {
          console.error('Error getting location', error);
          this.loading = true;
          this.findNearbyPlaces(type);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      this.loading = true;
      this.findNearbyPlaces(type);
    }
  }

  findNearbyPlaces(type: string) {
    const service = new google.maps.places.PlacesService(
      document.createElement('div')
    );
    service.nearbySearch(
      {
        location: this.center,
        radius: 5000,
        type,
      },
      (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          this.places = results;
          // console.log(this.places);
          this.loading = false;
        }
      }
    );
  }
}
