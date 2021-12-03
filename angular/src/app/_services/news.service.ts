import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080/api/news/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get(API_URL +  { responseType: 'json' });
  }

  getHotNews(): Observable<any> {
    return this.http.get(API_URL + 'hot', { responseType: 'json' });
  }

  getTop(): Observable<any> {
    return this.http.get(API_URL + 'top', { responseType: 'json' });
  }

  createNews(news, currentnews): Observable<any> {
    return this.http.post(API_URL + 'save', {
      preview: news.preview,
      content: news.content,
      cat_id: currentnews.cat_id,
      author_id: currentnews.author_id,
      hot: currentnews.hot
    }, httpOptions);
  }

  changeNews(news, currentnews): Observable<any> {
    return this.http.post(API_URL + 'update', {
        preview: news.preview,
        content: news.content,
        cat_id: currentnews.cat_id,
        author_id: currentnews.author_id,
        hot: currentnews.hot
    }, httpOptions);

    
  }

  delNews(news, currentnews): Observable<any> {
    return this.http.post(API_URL + 'delete', {
        preview: news.preview,
        content: news.content,
        cat_id: currentnews.cat_id,
        author_id: currentnews.author_id,
        hot: currentnews.hot
    }, httpOptions);
}
}