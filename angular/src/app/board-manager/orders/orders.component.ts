import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../_services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderedOrders: any;
  confirmedOrders: any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.showOrderedOrders().subscribe(
      data => {
        console.log(data);
        this.orderedOrders = data.orders;
      },
      err => {
        console.log(err.error);
      }
    );

    this.orderService.showConfirmedOrders().subscribe(
      data => {
        console.log(data);
        this.confirmedOrders = data.orders;
      },
      err => {
        console.log(err.error);
      }
    );
  }

  public onClickConfirmOrder(orderId): void {
    this.orderService.confirmOrder(orderId).subscribe(
      data => {
        this.ngOnInit();
        console.log(data.message.message);
      },
      err => {
        console.log(err.error.message);
      }
    );
  }

  public onClickDeleteOrder(orderId): void {
    this.orderService.deleteOrder(orderId).subscribe(
      data => {
        this.ngOnInit();
        console.log(data.message.message);
      },
      err => {
        console.log(err.error.message);
      }
    );
  }

  public onClickCloseOrder(orderId): void {
    this.orderService.closeOrder(orderId).subscribe(
      data => {
        this.ngOnInit();
        console.log(data.message.message);
      },
      err => {
        console.log(err.error.message);
      }
    );
  }

}
