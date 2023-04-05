import { AbstractControl } from '@angular/forms';

export class CustomVlidator {
  static validateName(control: AbstractControl) {
    const value = control.value as string;

    if (value.includes('test')) {
      return { invalidName: true };
    } else return null;
  }

  static ValidateSpecialChar(char: string) {
    return function (control: AbstractControl) {
      const value = control.value as string;

      if (value.includes(char)) {
        return { invalidCharExist: true };
      } else return null;
    };
  }
}
