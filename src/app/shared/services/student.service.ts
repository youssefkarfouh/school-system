import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStudent } from '../interfaces/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IStudent[]>(`${this.api}/students`);
  }
  addStudent(item: IStudent) {
    return this.http.post<IStudent>(`${this.api}/students`, item);
  }
  removeStudent(id: number) {
    return this.http.delete<IStudent>(`${this.api}/students/${id}`);
  }
}
