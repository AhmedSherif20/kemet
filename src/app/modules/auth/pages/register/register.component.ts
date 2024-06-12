import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsService } from 'src/app/services/forms.service';
import { SwalAlertService } from 'src/app/services/swal-alert.service';
import { AuthApiService } from '../../services/auth-api.service';
import { firstValueFrom } from 'rxjs';
import { IUserData } from 'src/app/interfaces';
import { airportList, countryList, egyptAirportList } from 'src/app/utils/data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    First_Name: new FormControl(null, [Validators.required]),
    Last_Name: new FormControl(null, [Validators.required]),
    cPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),

    Phone_Number: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
      ),
    ]),
    Address: new FormControl(null, [Validators.required]),
    Country: new FormControl(null, [Validators.required]),
    Date_of_Birth: new FormControl(null, [Validators.required]),
    Gender: new FormControl(null, [Validators.required]),
    Passport_Number: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Za-z0-9]{6,20}$/),
    ]),
    arrival_time: new FormControl(null, [Validators.required]),
    departure_time: new FormControl(null, [Validators.required]),
    arrival_airport: new FormControl(null, [Validators.required]),
    departure_airport: new FormControl(null, [Validators.required]),
    Profile_Picture: new FormControl(null, [
      Validators.pattern(
        /^(https?:\/\/)?((([a-zA-Z0-9\-]+)\.)+([a-zA-Z]{2,})(:[0-9]{2,5})?(\/[^\s]*)?)$/
      ),
    ]),
    Payment_Methods: new FormControl(null, [Validators.required]),
  });

  countryList: string[] = countryList;

  egyptAirportList: string[] = egyptAirportList;

  airportList: string[] = airportList;

  showPassword: boolean = false;

  showConfirmPassword: boolean = false;

  loading: boolean = false;

  constructor(
    private formsService: FormsService,
    private swalAlertService: SwalAlertService,
    private router: Router,
    private _AuthApiService: AuthApiService
  ) {}

  hasError(control: string, validator: string): boolean {
    return this.formsService.checkFormControlError(
      this.registerForm,
      control,
      validator
    );
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('cPassword')!.value;
  }

  async submitRegister(): Promise<void> {
    try {
      this.loading = true;

      // 1 get password and check password result
      const checkPasswordMatching = this.passwordMatchValidator(
        this.registerForm
      );

      // 2 check password and check password result
      if (!checkPasswordMatching) {
        this.swalAlertService.showToast(
          'warning',
          'Password not match',
          "Password don't match confirm password"
        );
        this.loading = false;

        return;
      }

      // 3 check form values validation
      if (this.registerForm.invalid) {
        this.swalAlertService.showToast(
          'warning',
          'All Inputs Required',
          'Please be sure all inputs filled'
        );
        console.log(this.registerForm);
        this.loading = false;
        return;
      }

      // 4 check user url photo
      if (!this.registerForm.get('Profile_Picture')!.value) {
        this.registerForm
          .get('Profile_Picture')
          ?.setValue(
            'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'
          );
      }

      // 5 delete cPassword key & value
      const formData = this.registerForm.value;
      delete formData.cPassword;

      // 6 the data will send to api
      const registerData: IUserData = formData;

      console.log(registerData, 'register data');

      const registerApiResponse: any = await firstValueFrom(
        this._AuthApiService.userRegister(registerData)
      );

      console.log(registerApiResponse);

      if (registerApiResponse['status'] == 'success') {
        this.swalAlertService.fireAlert(
          'success',
          'registered successfully ✅',
          'will be redirect to login page'
        );

        this.router.navigate(['/auth/login']);

        this.loading = false;
      }

      this.loading = false;
    } catch (error: any) {
      this.swalAlertService.fireAlert(
        'error',
        error.error.message ?? 'something happen wrong',
        'please try again'
      );
      this.loading = false;
    }
  }
}
