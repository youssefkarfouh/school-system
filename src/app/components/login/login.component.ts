import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../interfaces/user';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  alertMsg!: string;
  user: IUser = {
    username: '',
    password: '',
  };

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.user).subscribe((data) => {

      console.log(data);
      
      if (data) {
        this.router.navigate(['dashboard']);
      } else {
        this.alertMsg = 'username or password are incorrect';
      }
    });
  }
}