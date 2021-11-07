import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const REQUEST_API = 'http://localhost:8080/api/request/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  create(request): Observable<any> {
    return this.http.post(REQUEST_API + 'create', {
      car_id: request.car_id,
      date: request.date,
      idS1: request.idS1,
      idS2: request.idS2,
      idS3: request.idS3
    }, httpOptions);
  }

  asseptRequest(f): Observable<any> {
    return this.http.post(REQUEST_API + 'acceptRequest', {
      id: f.id_r
    }, httpOptions);
  }


  getUserRequests(): Observable<any> {
    return this.http.get(REQUEST_API + 'userS', { responseType: 'json' });
  }

  getMasterRequests(): Observable<any> {
    return this.http.get(REQUEST_API + 'mastersS', { responseType: 'json' });
  }

  getRequestsForAssept(): Observable<any> {
    return this.http.get(REQUEST_API + 'requestByStatus/2', {responseType: 'json' });
  }
}
