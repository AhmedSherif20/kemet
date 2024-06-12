import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from 'src/app/services/forms.service';
import { SwalAlertService } from 'src/app/services/swal-alert.service';

@Component({
  selector: 'app-hotels-search',
  templateUrl: './hotels-search.component.html',
  styleUrls: ['./hotels-search.component.scss'],
})
export class HotelsSearchComponent {
  citiesArr = [
    'Cairo',
    'Alexandria',
    'Luxor',

    'Giza',
    'Shubra El Kheima',
    'Port Said',
    'Suez',
    'El Mahalla El Kubra',
    'Mansoura',
    'Tanta',
    'Asyut',
    'Ismailia',
    'Faiyum',
    'Zagazig',
    'Damietta',
    'Aswan',
    'Minya',
    'Damanhur',
    'Beni Suef',
    'Qena',
    'Sohag',
    'Hurghada',
    '6th of October City',
    'Shibin El Kom',
    'Banha',
    'Kafr El Sheikh',
    'Arish',
    'Mallawi',
    '10th of Ramadan City',
    'Bilbais',
    'Marsa Matruh',
    'Qalyub',
    'Abu Kabir',
    'Kafr El Dawwar',
    'Sharm El Sheikh',
    'Girga',
    'Akhmim',
    'Matareya',
    'Manfalut',
    'Qus',
    'Talkha',
    'Naqada',
    'Idfu',
    'El Qanater El Khayreya',
    'Helwan',
    'El Hawamdeya',
    'Sheikh Zayed City',
    'Madinet Nasr',
    'Obour City',
    'Badr City',
    'El Shorouk City',
    'New Cairo',
    'El Alamein',
    'New Aswan',
    'New Toshka',
    'New Fayoum',
    'New Beni Suef',
    'New Minya',
    'New Akhmim',
    'New Qena',
    'New Assiut',
    'New Tiba',
  ];
  today: string | undefined;

  ngOnInit(): void {
    this.today = this.getFormattedDate(new Date());
  }

  searchHotelForm: FormGroup = new FormGroup({
    city: new FormControl(null, [Validators.required]),
    arriveDate: new FormControl(this.getFormattedDate(new Date()), [
      Validators.required,
    ]),
    leaveDate: new FormControl(null, [Validators.required]),
    numOfGuests: new FormControl(1, [Validators.required]),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _swalAlertService: SwalAlertService
  ) {}

  getFormattedDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  showAvailableHotels(): void {
    console.log(this.searchHotelForm.valid);

    if (this.searchHotelForm.invalid) {
      this._swalAlertService.showToast('warning', 'all inputs required', '');
      return;
    }

    console.log(this.searchHotelForm.value);

    this.router.navigate(['search'], {
      relativeTo: this.route,
      queryParams: this.searchHotelForm.value ?? {},
      queryParamsHandling: 'merge', // Keeps any existing query parameters in the URL
    });
  }
}
