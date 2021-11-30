import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { OrderService } from '../_services/order.service';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any;
  content: string;
  isSuccessful = false;
  isFailed = false;
  errorMessage = '';
  isLoggedIn = false;

  constructor(private productService: ProductService,
              private tokenStorageService: TokenStorageService,
              private orderService: OrderService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.productService.getProducts().subscribe(
      data => {
        this.products = data.products;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  onClickBuy(id): void{
    this.orderService.addProductToCart(id).subscribe(
      data => {
        this.isSuccessful = true;
        this.isFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    );
  }
}
