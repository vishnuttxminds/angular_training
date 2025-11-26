import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appPassword]',
})
export class PasswordDirective {
  @HostBinding('style.border') border: string = '2px solid gray';
  @Output() strengthChanged = new EventEmitter<string>();

  private passwordRegex: RegExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  constructor() {}

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const value: string = event.target.value;

    this.checkPasswordStrength(value);
  }

  checkPasswordStrength(password: string) {
    if (password.length === 0) {
      this.border = '2px solid gray';
      return;
    }

    let message = '';

    if (password.length > 0) {
      if (this.passwordRegex.test(password)) {
        message = 'Password medium';

        this.border = '2px solid green';
      } else if (password.length >= 5) {
        message = 'Password Strong';
        this.border = '2px solid orange';
      } else {
        message = 'Password Poor';
        this.border = '2px solid red';
      }
    }

    this.strengthChanged.emit(message);
  }
}
