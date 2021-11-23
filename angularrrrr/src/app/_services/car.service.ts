import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const CAR_API = 'http://localhost:8080/api/car/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  register(car): Observable<any> {
    return this.http.post(CAR_API + 'register', {
      number: car.number,
      mark: car.mark,
      model: car.model
    }, httpOptions);
  }

  getAll(): Observable<any> {
    return this.http.get(CAR_API + 'allCars', { responseType: 'json' });
  }

  getUserCars(): Observable<any> {
    return this.http.get(CAR_API + 'cars', { responseType: 'json' });
  }
}
