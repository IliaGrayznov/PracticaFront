import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../_services/order.service';
import {Router} from '@angular/router';
import {DataService} from '../../_services/data/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any;
  content: string;
  amount: number;

  constructor(private orderService: OrderService,
              private router: Router,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.orderService.showAmountCart().subscribe( //
      data => {
        this.amount = data.amount;
        if (data.amount === 0) {
          this.dataService.update(1); // FIXME
          this.router.navigate(['/']);
        }
      },
      err => {
        console.log(err.error.message);
      }
    );
    this.orderService.showCart().subscribe(
      data => {
        this.products = data;
      },
      err => {
        console.log(err.error.message);
      }
    );
  }

  onClickAdd(id): void{
    this.orderService.addProductToCart(id).subscribe(
      data => {
        this.ngOnInit();
        console.log(data.message);
      },
      err => {
        console.log(err.error.message);
      }
    );
  }

  onClickDelete(id): void{
    this.orderService.deleteProductFromCart(id).subscribe(
      data => {
        this.ngOnInit();
        console.log(data.message);
      },
      err => {
        console.log(err.error.message);
      }
    );
  }
  onClickSubmit(): void{
    this.orderService.confirm().subscribe(
      data => {
        this.ngOnInit();
        console.log(data.message);
      },
      err => {
        console.log(err.error.message);
      }
    );
  }
}
