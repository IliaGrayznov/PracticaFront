import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board-master',
  templateUrl: './board-manager.component.html',
  styleUrls: ['./board-manager.component.css']
})
export class BoardManagerComponent implements OnInit {

  content: string;

  constructor() { }

  ngOnInit(): void {
  }
}
