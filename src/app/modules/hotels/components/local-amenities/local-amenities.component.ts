import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-local-amenities',
  templateUrl: './local-amenities.component.html',
  styleUrls: ['./local-amenities.component.scss'],
})
export class LocalAmenitiesComponent {
  @Input() description: string = '';
}
