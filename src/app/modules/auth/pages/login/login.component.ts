import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/services/forms.service';
import { SwalAlertService } from 'src/app/services/swal-alert.service';
import { AuthApiService } from '../../services/auth-api.service';
import { firstValueFrom } from 'rxjs';
import { UserStatusService } from 'src/app/services/user-status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  loading: boolean = false;
  showPassword: boolean = false;

  constructor(
    private formsService: FormsService,
    private swalAlertService: SwalAlertService,
    private router: Router,
    private authApiService: AuthApiService,
    private userStatusService: UserStatusService
  ) {}

  hasError(control: string, validator: string): boolean {
    return this.formsService.checkFormControlError(
      this.loginForm,
      control,
      validator
    );
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  async submitLogin(): Promise<void> {
    if (this.loginForm.invalid) {
      this.swalAlertService.showToast(
        'warning',
        'All Inputs Required',
        'Please be sure all inputs filled'
      );
      // this.loading = false;
      return;
    }

    this.loading = true;

    const userData = this.loginForm.value;

    console.log('userData ==>', userData);

    const loginResponse: any = await firstValueFrom(
      this.authApiService.userLogin(userData)
    );

    if (loginResponse['status'] == 'success') {
      this.userStatusService.userLogged.next(true);
      this.userStatusService.userToken.next(loginResponse['token']);
      this.userStatusService.setToken(loginResponse['token']);
      this.router.navigate(['home']);
      this.swalAlertService.showToast('success', 'logged successfully');
      console.log(
        'user logged =>',
        this.userStatusService.userLogged.getValue()
      );
      console.log('user token =>', this.userStatusService.userToken.getValue());
    } else {
      const errMsg: string =
        loginResponse['message'] ??
        'something error happen please try again later';

      this.swalAlertService.fireAlert(
        'error',
        errMsg,
        'Please Try again Carefully'
      );

      console.log(
        'user logged =>',
        this.userStatusService.userLogged.getValue()
      );
      console.log('user token =>', this.userStatusService.userToken.getValue());

      this.loading = false;
    }

    console.log(loginResponse);
  }
}
