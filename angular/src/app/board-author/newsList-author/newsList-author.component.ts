import {Component, OnDestroy, OnInit} from '@angular/core';
import {News} from '../services/';
import {NewsList} from '../services/';
import {Subscription} from 'rxjs';



@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class NewsListAuhrorComponent implements OnInit, OnDestroy {

  news: News[] = []
  pSub: Subscription
  dSub: Subscription
  searchStr = ''

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.pSub = this.newsService.getAll().subscribe(news => {
      this.news = news
    })
  }

  ngOnDestroy() {
    if(this.pSub) {
      this.pSub.unsubscribe()
    }
    if(this.dSub) {
      this.dSub.unsubscribe()
    }
  }

  remove(id: string) {
    this.dSub = this.newsService.remove(id).subscribe(() => {
      this.news = this.newsService.filter(post => post.id !== id)
    })
  }
}