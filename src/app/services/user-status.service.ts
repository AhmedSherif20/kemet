import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SwalAlertService } from './swal-alert.service';
import { SecureLsService } from './secure-ls.service';

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
    private swalAlertService: SwalAlertService,
    private _secureLsService: SecureLsService
  ) {}

  setToken(token: string) {
    this._secureLsService.encryptData('token', token);
  }

  getToken(): string | null {
    return this._secureLsService.decryptData('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logOut(): void {
    this._secureLsService.removeAllData();
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
