import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISignIn } from '../../shared/interfaces/auth';

import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { count, from, Observable, toArray } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  list$!: Observable<ISignIn>;
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

    // const result = numbers.pipe(count(i => i % 2 === 1));
    this.authService.login(this.user.username).pipe().subscribe((data) => {
      

      const length$ = from(data).pipe(
       
      );

      // console.log(data);
      // console.log(data[0].username);

      
      // if (data.password === this.user.password) {

      //   console.log("logged in ");
        
      //   this.router.navigate(['admin/dashboard']);
      // } else {
      //   this.alertMsg = 'username or password are incorrect';
      // }
    });
  }
}
