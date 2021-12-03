import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {News} from '../services/';
import {NewsList} from '../services/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news$: Observable<News[]>

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.news$ = this.newsService.getAll()
  }
}
