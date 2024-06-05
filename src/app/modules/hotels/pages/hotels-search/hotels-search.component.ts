import { Component } from '@angular/core';
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-hotels-search',
  templateUrl: './hotels-search.component.html',
  styleUrls: ['./hotels-search.component.scss'],
})
export class HotelsSearchComponent {
  citiesArr = [
    'Cairo',
    'Alexandria',
    'Giza',
    'Shubra El Kheima',
    'Port Said',
    'Suez',
    'El Mahalla El Kubra',
    'Luxor',
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

  getFormattedDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  constructor(private formsService: FormsService) {}
}
