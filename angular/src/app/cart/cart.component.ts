import { Component, OnInit } from '@angular/core';
import {OrderService} from '../_services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any;
  content: string;
  errorMessage = '';

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.showCart().subscribe(
      data => {
        this.products = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  onClickAdd(id): void{
    this.orderService.addProductToCart(id).subscribe(
      data => {
        this.ngOnInit();
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

  onClickDelete(id): void{
    this.orderService.deleteProductFromCart(id).subscribe(
      data => {
        this.ngOnInit();
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
