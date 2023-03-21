import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISignUp } from '../../shared/interfaces/auth';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignupComponent {
  alertMsg!: string;

  user: ISignUp = {
    username: '',
    password: '',
    confirmPsd: '',
  };

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  createUser() {
    if (this.user.password === this.user.confirmPsd) {
      const user = {
        username: this.user.username,
        password: this.user.password,
      };

      this.authService.signUp(user).subscribe((data) => {
        console.log(data);
      });

      this.router.navigateByUrl('/home/login');
    } else this.alertMsg = "Password Doesn't match";
  }
}
