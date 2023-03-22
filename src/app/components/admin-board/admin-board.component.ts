import { Component } from '@angular/core';
import { faSchoolFlag, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss'],
})
export class AdminBoardComponent {
  faSchoolFlag = faSchoolFlag;
  faChevronDown = faChevronDown;
}
