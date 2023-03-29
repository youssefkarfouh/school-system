import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/shared/interfaces/student';
import { StudentService } from 'src/app/shared/services/student.service';
import { cards } from './cardsData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  studentList: IStudent[] = [];

  cardsData = cards;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAll().subscribe((data) => {
      this.studentList = data;

      this.cardsData.forEach((card) => {
        switch (card.cardTitle) {
          case 'Etudiants':
            card.cardNumber = this.studentList.length;
            break;
          case 'Enseignats':
            card.cardNumber = this.studentList.length;
            break;
          case 'Garcon inscrits':
            card.cardNumber = this.studentList.filter(
              (student) => student.genre == 'm'
            ).length;
            break;
          case 'Filles inscrits':
            card.cardNumber = this.studentList.filter(
              (student) => student.genre == 'f'
            ).length;
            break;
        }
      });
    });
  }
}
