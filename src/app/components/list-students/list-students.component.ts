import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/shared/interfaces/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent implements OnInit{

  studentList: IStudent[] = [];

  constructor(private studentService: StudentService){

  }

  ngOnInit(): void {
    this.studentService.getAll().subscribe((data) => {
      this.studentList = data;
  })
}
}
