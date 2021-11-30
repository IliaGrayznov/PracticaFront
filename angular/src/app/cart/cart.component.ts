import { Component, OnInit } from '@angular/core';
import {OrderService} from '../_services/order.service';
import {ProductService} from '../_services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any;
  content: string;

  constructor(private orderService: OrderService,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.orderService.showCart().subscribe(
      data => {
        this.products = data.products;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
