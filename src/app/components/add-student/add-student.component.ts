import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { StudentService } from '../../shared/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  studentForm!: FormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private studentService: StudentService
  ) {
    this.studentForm = this.fb.group({
      prenom: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      dateN: new FormControl(new Date('2022'), [Validators.required]),
      class: new FormControl('', [Validators.required]),
      group: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.studentForm.setValue({
      nom: 'Nancy',
      prenom: 'Drew',
      dateN: 'Drew',
      class: 'Drew',
      group: 'Drew',
      genre: 'ssd',
    });
  }

  submitForm(): void {
    this.studentService.addStudent(this.studentForm.value).subscribe((data) => {
      console.log(data);
    });
    // console.log('submit', this.studentForm.value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.studentForm.reset();
  }
}
