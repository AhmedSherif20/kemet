import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  /**
   * Listens for the window resize event and calculates the number of items
   * to display per page based on the current window width.
   *
   * @returns {number} The number of items to display per page.
   */
  @HostListener('window:resize')
  getItemPerPage(): number {
    let itemPerPage: number;

    // Get the current window width
    const windowWidth = window.innerWidth;

    // Determine the number of items per page based on window width
    if (windowWidth <= 639) {
      itemPerPage = 1;
    } else if (windowWidth >= 640 && windowWidth <= 767) {
      itemPerPage = 1;
    } else if (windowWidth >= 768 && windowWidth <= 1023) {
      itemPerPage = 2;
    } else if (windowWidth >= 1024 && windowWidth <= 1279) {
      itemPerPage = 3;
    } else if (windowWidth >= 1280 && windowWidth <= 1535) {
      itemPerPage = 4;
    } else {
      itemPerPage = 4;
    }

    return itemPerPage;
  }
}
