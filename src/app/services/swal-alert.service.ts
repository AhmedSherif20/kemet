import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SwalAlertService {
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  constructor() {}

  fireAlert(icon: SweetAlertIcon, title: string, text: any): void {
    Swal.fire({
      title: this.capitalizeWords(title),
      text,
      icon,
    });
  }

  showToast(
    icon: any,
    title: string,
    text: string = '',
    duration: number = 3000
  ) {
    this.Toast.fire({
      icon,
      title: this.capitalizeWords(title),
      text,
      timer: duration,
    });
  }

  capitalizeWords(str: string) {
    // Split the string into an array of words
    const words = str.split(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map((word) => {
      // If the word is empty, return it as is
      if (word.length === 0) {
        return word;
      }
      // Capitalize the first letter and concatenate with the rest of the word
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the capitalized words back into a single string
    return capitalizedWords.join(' ');
  }
}
