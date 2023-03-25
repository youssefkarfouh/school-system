import { Component } from '@angular/core';
import { faChalkboard} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-board',
  templateUrl: './card-board.component.html',
  styleUrls: ['./card-board.component.scss']
})
export class CardBoardComponent {
  faChalkboard = faChalkboard;
}
