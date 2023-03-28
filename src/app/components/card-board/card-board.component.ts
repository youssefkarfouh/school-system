import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-board',
  templateUrl: './card-board.component.html',
  styleUrls: ['./card-board.component.scss'],
})
export class CardBoardComponent implements OnInit {
  @Input() cardItem!: any;

  ngOnInit() {}
}
