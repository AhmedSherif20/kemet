import { Component } from '@angular/core';

@Component({
  selector: 'app-available-hotels',
  templateUrl: './available-hotels.component.html',
  styleUrls: ['./available-hotels.component.scss'],
})
export class AvailableHotelsComponent {
  hotelReview: string[] = [
    'high recommend',
    'excellent',
    'good',
    'very good',
    'normal',
    'bad',
    'so bad',
  ];

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

  descDemo = `
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum fugit quam quasi eligendi vero
                        eius
                        maxime obcaecati labore? Dolorum repudiandae alias non dolore debitis magni aperiam. Aliquam,
                        impedit
                        provident.`;

  famousHotelsInEgypt = [
    'Marriott Mena House',
    'Four Seasons Hotel Cairo at Nile Plaza',
    'Sofitel Legend Old Cataract',
    'The Oberoi Sahl Hasheesh',
    'Kempinski Nile Hotel',
    'Steigenberger Al Dau Beach Hotel',
    'Hilton Luxor Resort & Spa',
    'Ritz-Carlton',
    'Fairmont Nile City Hotel',
    'Jaz Aquamarine Resort',
    'Stella Di Mare Beach Hotel & Spa',
    'Baron Palace Sahl Hasheesh',
    'Conrad',
    'Sheraton Miramar Resort',
    'Le Meridien Pyramids Hotel & Spa',
    'Savoy',
    'Four Seasons Resort',
    'JW Marriott Hotel',
    'Dusit Thani LakeView',
    'Sunrise Romance Resort',
    'Mövenpick Resort',
    'Iberotel Palace',
    'Royal Maxim Palace Kempinski',
    'Cleopatra Luxury Resort',
  ];

  egyptianHotelImages = [
    'https://plus.unsplash.com/premium_photo-1692217764140-4f8db35b9f76?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1524932563317-9962c267d8bd?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1524932563317-9962c267d8bd?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1648852231208-21ce6bd2768b?q=80&w=3940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1711111038517-f5d61fe63008?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1614451153800-c141e95b9054?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661962360690-e91cc0df88f1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGVneXB0aW9uJTIwcmVkc2VhJTIwaG90ZWxzfGVufDB8fDB8fHww',
  ];

  /**
   * Generates a random integer between the specified minimum and maximum values, inclusive.
   *
   * @param {number} max - The maximum value for the random integer.
   * @param {number} min - The minimum value for the random integer.
   * @returns {number} A random integer between the min (inclusive) and max (inclusive).
   *
   * @example
   * // Returns a random integer between 1 and 5
   * const randomNumber = getRandomStar(5, 1);
   */
  getRandomNum(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  descriptionSlicer(description: string) {
    // Split the description into words
    const words = description.split(' ');

    // Slice the first 10 words
    const firstTenWords = words.slice(0, 15);

    // Join the words back into a string
    return firstTenWords.join(' ');
  }
}
