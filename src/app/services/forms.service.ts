import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor() {}

  checkFormControlError(
    formGroup: FormGroup,
    control: string,
    validator: string
  ): boolean {
    return (
      (formGroup.get(control)?.touched &&
        formGroup.get(control)?.hasError(validator)) ??
      true
    );
  }
}
