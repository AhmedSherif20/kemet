import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SwalAlertService } from './swal-alert.service';

@Injectable({
  providedIn: 'root',
})
export class UserStatusService {
  userToken: BehaviorSubject<string | undefined> = new BehaviorSubject<
    string | undefined
  >(undefined);

  userLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private swalAlertService: SwalAlertService
  ) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logOut(): void {
    localStorage.clear();
    this.userLogged.next(false);
    this.userToken.next(undefined);
    this.router.navigate(['home']);

    this.swalAlertService.fireAlert(
      'success',
      'log out successfully',
      'app will restart in 3 second'
    );

    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }
}
