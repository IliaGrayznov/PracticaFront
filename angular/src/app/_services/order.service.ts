import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const API_URL = 'http://localhost:8080/api/product/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  addProductToCart(id): Observable<any> {
    return this.http.post('http://localhost:8080/api/client/order/add', {
      product_id: id
    }, httpOptions);
  }

  deleteProductFromCart(id): Observable<any> {
    return this.http.post('http://localhost:8080/api/client/order/delete', {
      product_id: id
    }, httpOptions);
  }
  showCart(): Observable<any> {
    return this.http.get('http://localhost:8080/api/client/order/show', { responseType: 'json' });
  }
  showAmountCart(): Observable<any> {
    return this.http.get('http://localhost:8080/api/client/order/amount', { responseType: 'json' });
  }
}
