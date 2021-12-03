import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {News} from '../services';
import {NewsList} from '../services';
import {Subscription} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { NewsService } from '../../_services/news.service';


@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit, OnDestroy {

  form: FormGroup
  post: Post
  uSub: Subscription
  submitted = false

  constructor(private route: ActivatedRoute,
              private newsService: NewsService,
              private news: News) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((news: currentnews) => {
        return this.newsService.getNews(news.id)
      })
      ).subscribe((post: Post) => {
        this.form = new FormGroup({
          title: new FormControl(post.title, Validators.required),
          text: new FormControl(post.text, Validators.required)
        })
      this.post = post
    })
  }

  submit() {
    if(this.form.invalid) {
      return
    }

    this.submitted = true

    const post = {
      ...this.post,
      title: this.form.value.title,
      text: this.form.value.text,
    }

    this.uSub = this.newsService.update(post).subscribe(()=>{
      this.submitted = false
      
    })
  }

  ngOnDestroy() {
    if(this.uSub){
      this.uSub.unsubscribe()
    }
  }