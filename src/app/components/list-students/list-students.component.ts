import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/shared/interfaces/student';
import { StudentService } from 'src/app/shared/services/student.service';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss'],
})
export class ListStudentsComponent implements OnInit {
  studentForm!: FormGroup;
  studentList: IStudent[] = [];
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;
  isVisible = false;
  isOkLoading = false;

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.studentForm = this.fb.group({
      id: new FormControl(null),
      prenom: new FormControl(null, [Validators.required]),
      nom: new FormControl(null, [Validators.required]),
      dateN: new FormControl(null, [Validators.required]),
      class: new FormControl(null, [Validators.required]),
      group: new FormControl(null, [Validators.required]),
      genre: new FormControl(null, [Validators.required]),
      dateInscrit: new FormControl(null, [Validators.required]),
    });
  }

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

  showEditModal(student: IStudent) {
    this.isVisible = true;
    this.studentForm.setValue(student);
  }

  handleOk(): void {
    this.isOkLoading = true;

    this.studentService
      .updateStudent(this.studentForm.value)
      .subscribe((data) => {
        this.isOkLoading = false;
        this.isVisible = false;
        this.studentList = this.studentList.map((ele) =>
          ele.id === data.id ? data : ele
        );
      });
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
