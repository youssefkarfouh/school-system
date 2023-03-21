import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISignIn } from '../../shared/interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  signUp(userData: ISignIn): Observable<ISignIn> {
    return this.http.post<ISignIn>(`${this.api}/users`, userData);
  }

  login(username: string):Observable<ISignIn[]> {
    return this.http.get<ISignIn[]>(`${this.api}/users?username=${username}`);
  }
}
