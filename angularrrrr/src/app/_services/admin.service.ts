import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/service/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllServices(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'json' });
  }

  createService(service): Observable<any> {
    return this.http.post(API_URL + 'create', {
      name: service.name,
      description: service.description,
      price: service.price,
      type_id: service.type_id
    }, httpOptions);
  }

  updateService(service, id): Observable<any> {
    return this.http.post(API_URL + 'update', {
      id: id,
      price: service.price
    }, httpOptions);
  }

  deleteService(id): Observable<any> {
    return this.http.post(API_URL + 'delete', {
      id: id,
    }, httpOptions);
  }
}
