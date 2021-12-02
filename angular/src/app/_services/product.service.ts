import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  getProductsManager(): Observable<any> {
    return this.http.get(API_URL + 'manager/products', { responseType: 'json' });
  }

  getCategories(): Observable<any> {
    return this.http.get('http://localhost:8080/api/client/categories', { responseType: 'json' });
  }

  createProduct(product, category): Observable<any> {
    return this.http.post(API_URL + 'create', {
      amount_in_warehouse: product.amount_in_warehouse,
      category_id: category.category_id,
      description: product.description,
      img: 'none',
      name: product.name,
      price: product.price
    }, httpOptions);
  }

  changeProduct(product, category): Observable<any> {
    return this.http.post(API_URL + 'change', {
      amount_in_warehouse: product.amount_in_warehouse,
      product_id: product.id,
      category_id: category.category_id,
      description: product.description,
      img: 'none',
      name: product.name,
      price: product.price
    }, httpOptions);
  }

  deleteProduct(productId): Observable<any> {
    return this.http.post(API_URL + 'delete', {
      product_id: productId
    }, httpOptions);
  }
}
