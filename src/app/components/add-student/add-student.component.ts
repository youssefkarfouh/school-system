import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  studentForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      nom: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      prenom: new FormControl('', { validators: [Validators.required] }),
      dateN: new FormControl('', { validators: [Validators.required] }),
      class: new FormControl('', { validators: [Validators.required] }),
      group: new FormControl('', { validators: [Validators.required] }),
      genre: new FormControl('', { validators: [Validators.required] }),
    });
  }

  AddStudent() {
    console.log(this.studentForm.value);
  }
}
