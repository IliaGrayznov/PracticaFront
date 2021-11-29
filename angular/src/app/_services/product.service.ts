import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/product/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(API_URL + 'products', { responseType: 'json' });
  }

  createProduct(product): Observable<any> {
    return this.http.post(API_URL + 'create', {
      amount_in_warehouse: product.amount_in_warehouse,
      category_id: 1,
      description: product.description,
      img: 'none',
      name: product.name,
      price: product.price
    }, httpOptions);
  }

  addProductToCart(product): Observable<any> {
    return this.http.post('http://localhost:8080/api/client/order/add', {
      id: product.id
    }, httpOptions);
  }
}
