import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignupComponent {
  alertMsg!: string; 

  user: IUser = {
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

      this.authService.addUser(user).subscribe((data) => {
        console.log(data); 
      });

      this.router.navigateByUrl('/home/login');
    } else this.alertMsg = "Password Doesn't match";
  }
}
