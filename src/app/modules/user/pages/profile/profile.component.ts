import { Component, OnInit } from '@angular/core';
import { SecureLsService } from 'src/app/services/secure-ls.service';
import { UserApiService } from '../../services/user-api.service';
import { IUserData } from 'src/app/interfaces';
import { Router } from '@angular/router';
import { SwalAlertService } from 'src/app/services/swal-alert.service';
import { firstValueFrom } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/services/forms.service';
import { airportList, countryList, egyptAirportList } from 'src/app/utils/data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userId: string | undefined = undefined;
  userData: IUserData | undefined;

  loading: boolean = false;

  userForm: FormGroup = new FormGroup({
    First_Name: new FormControl(null, [Validators.required]),
    Last_Name: new FormControl(null, [Validators.required]),

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

  editMode: boolean = false;
  constructor(
    private _secureLsService: SecureLsService,
    private _userApiService: UserApiService,
    private _router: Router,
    private _swalAlertService: SwalAlertService,
    private _formsService: FormsService
  ) {}

  ngOnInit(): void {
    this.userId = this._secureLsService.decryptData('userId');
    this.userForm.disable();
    if (this.userId) this.getUserData(this.userId);
  }

  async getUserData(id: string): Promise<void> {
    try {
      this.loading = true;

      // ====== 1 get data ======
      const userApiResponse = await firstValueFrom(
        this._userApiService.getUserById(id)
      );
      // ====== 2 assign data to prop ======
      this.userData = Array.isArray(userApiResponse)
        ? userApiResponse[0]
        : userApiResponse;

      console.log(this.userData);
      // ====== 3 check if prop have value ======
      if (!this.userData) {
        this._swalAlertService.fireAlert(
          'error',
          'something happen wrong',
          'please try again later'
        );
        this._router.navigate(['/home']);
        this.loading = false;
        return;
      }

      // ====== 4 assign value to form to display ======
      this.setUserDataToForm(this.userData);

      this.loading = false;
    } catch (error: any) {
      this._router.navigate(['/home']);
      this._swalAlertService.fireAlert(
        'error',
        error.error.message ?? 'something happen wrong',
        'please try again later'
      );
      this.loading = false;
    }
  }

  async updateUserData(): Promise<void> {
    console.log(this.userForm.value);

    this._userApiService
      .updateUserData({
        First_Name: 'brad new name',
        Last_Name: 'Doe',
        Phone_Number: '123456789',
        Address: '123 Main Street',
        Country: 'USA',
        Date_of_Birth: new Date('1990-01-01'),
        Gender: 'Male',
        Passport_Number: 'ABC123',
        arrival_time: new Date('2024-06-02 08:00:00'),
        departure_time: new Date('2024-06-10 12:00:00'),
        arrival_airport: 'JFK Airport',
        departure_airport: 'LAX Airport',
        Profile_Picture:
          'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg',
        Payment_Methods: 'Credit Card',
      })
      .subscribe((res) => {
        console.log('res el update');

        console.log(res);
      });
  }

  // ================== UI Handler Methods ==================
  hasError(control: string, validator: string): boolean {
    return this._formsService.checkFormControlError(
      this.userForm,
      control,
      validator
    );
  }

  togglePassEye(id: 1 | 2): void {
    if (id == 1) {
      this.showPassword = !this.showPassword;
    }
    if (id == 2) {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  controlEditMode(mode: 'en' | 'de'): void {
    if (mode == 'en') {
      this.userForm.enable();
      this.editMode = true;
    }
    if (mode == 'de') {
      this.userForm.disable();
      this.editMode = false;
    }
  }

  setUserDataToForm(userData: IUserData): void {
    this.userForm.patchValue({
      password: userData.password,
      First_Name: userData.First_Name,
      Last_Name: userData.Last_Name,
      cPassword: null,
      Phone_Number: userData.Phone_Number,
      Address: userData.Address,
      Country: userData.Country,
      Date_of_Birth: userData.Date_of_Birth,
      Gender: userData.Gender,
      Passport_Number: userData.Passport_Number,
      arrival_time: userData.arrival_time,
      departure_time: userData.departure_time,
      arrival_airport: userData.arrival_airport,
      departure_airport: userData.departure_airport,
      Profile_Picture: userData.Profile_Picture,
      Payment_Methods: userData.Payment_Methods,
    });
  }
}
