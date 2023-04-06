import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { StudentService } from '../../shared/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  studentForm!: FormGroup;

  today = new Date();
  day = this.today.getDate().toString().padStart(2, '0');
  month = (this.today.getMonth() + 1).toString().padStart(2, '0');
  year = this.today.getFullYear().toString();

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) {
    this.studentForm = this.fb.group({
      prenom: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      dateN: new FormControl(new Date(), [Validators.required]),
      class: new FormControl('', [Validators.required]),
      group: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
      dateInscrit: new FormControl(
        `${this.day} / ${this.month} / ${this.year}`,
        [Validators.required]
      ),
    });
  }
  ngOnInit(): void {}

  submitForm(): void {
    this.studentService.addStudent(this.studentForm.value).subscribe((data) => {
      console.log('data from server', data);
      this.studentForm.reset();
    });
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.studentForm.reset();
  }
}
