import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/shared/interfaces/student';
import { StudentService } from 'src/app/shared/services/student.service';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss'],
})
export class ListStudentsComponent implements OnInit {
  studentList: IStudent[] = [];
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAll().subscribe((data) => {
      this.studentList = data;
    });
  }

  deleteStudent(id: number) {
    this.studentService.removeStudent(id).subscribe(() => {
      this.studentList = this.studentList.filter((el) => el.id !== id);
    });
  }
}
