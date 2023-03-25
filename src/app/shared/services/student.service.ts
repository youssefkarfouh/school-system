import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from '../interfaces/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAll(): Observable<IStudent> {
    return this.http.get<IStudent>(`${this.api}/students`);
  }
}
