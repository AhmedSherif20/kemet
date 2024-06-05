import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SwalAlertService } from 'src/app/services/swal-alert.service';
import { UserStatusService } from 'src/app/services/user-status.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private userStatusService: UserStatusService,
    private router: Router,
    private swalAlertService: SwalAlertService
  ) {}

  canActivate(): boolean {
    // Check if the user is already logged in
    if (this.userStatusService.isLoggedIn()) {
      // If logged in, redirect to home page or any other route
      this.router.navigate(['/home']);
      this.swalAlertService.fireAlert(
        'warning',
        'user already logged',
        'The login page cannot be seen when you are already logged in'
      );
      return false;
    }
    // If not logged in, allow access to the route
    return true;
  }
}
