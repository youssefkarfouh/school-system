import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISignIn } from '../../shared/interfaces/auth';

import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  alertMsg!: string;

  user: ISignIn = {
    username: '',
    password: '',
  };

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.user.username).subscribe((data) => {
      this.router.navigate(['/admin/dashboard']);
    });
  }
}
