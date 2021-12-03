import {Component, Input, OnInit} from '@angular/core';
import {News} from '../services';

@Component({
  selector: 'app-newsList',
  templateUrl: './newsList.component.html',
  styleUrls: ['./newsList.component.scss']
})
export class newsList implements OnInit {

  @Input() news: News

  constructor() { }

  ngOnInit() {
  }

}