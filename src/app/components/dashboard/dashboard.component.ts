import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/shared/interfaces/student';
import { StudentService } from 'src/app/shared/services/student.service';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  studentList: IStudent[] = [];
  menStudentList: IStudent[] = [];
  womenStudentList: IStudent[] = [];
  cards = [
    {
      cardIco: faChalkboardTeacher,
      cardTitle: 'Etudiants',
    },
    {
      cardIco: faChalkboardTeacher,
      cardTitle: 'Enseignats',
    },
    {
      cardIco: faChalkboardTeacher,
      cardTitle: 'Garcon inscrits',
    },
    {
      cardIco: faChalkboardTeacher,
      cardTitle: 'Filles inscrits ',
    },
  ];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAll().subscribe((data) => {
      this.studentList = data;

      data.forEach((student) => {
        if (student.genre === 'f') {
          this.womenStudentList = [...this.womenStudentList, student];
        } else {
          this.menStudentList = [...this.menStudentList, student];
        }
      });

      // this.cards.map((card) => {
      //   if (card.cardTitle == 'Etudiants') {
      //     card.cardNumber = this.studentList.length;
      //   }
      // });
      console.log('menStudentList', this.menStudentList);
      console.log('womenStudentList', this.womenStudentList);
    });
  }
}
