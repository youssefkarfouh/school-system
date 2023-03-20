import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addUser(userData: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.api}/users`, userData);
  }

  login(userData: IUser) {
    return this.http.post<IUser>(`${this.api}/users`, userData);
  }

  meni nsaliw

}