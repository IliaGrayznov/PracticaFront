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

  asseptRequest(id): Observable<any> {
    return this.http.post(REQUEST_API + 'acceptRequest', {
      id: id
    }, httpOptions);
  }

  rejectRequest(id): Observable<any> {
    return this.http.post(REQUEST_API + 'rejectRequest', {
      id: id
    }, httpOptions);
  }

  startServiceRequest(id): Observable<any> {
    return this.http.post(REQUEST_API + 'startService', {
      id: id
    }, httpOptions);
  }

  finishServiceRequest(f): Observable<any> {
    return this.http.post(REQUEST_API + 'finishService', {
      id: f
    }, httpOptions);
  }

  payService(id): Observable<any> {
    return this.http.post(REQUEST_API + 'payService', {
      id: id
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

  getServiceInRequests(id): Observable<any> {
    return this.http.get(REQUEST_API + 'servicesIN/'+id, { responseType: 'json' });
  }
}
