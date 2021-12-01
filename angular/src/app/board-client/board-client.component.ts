import {Component, OnInit} from '@angular/core';
import {OrderService} from '../_services/order.service';

@Component({
  selector: 'app-board-client',
  templateUrl: './board-client.component.html',
  styleUrls: ['./board-client.component.css']
})
export class BoardClientComponent implements OnInit {

  content: string;
  orders: any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.showOrders().subscribe( //
      data => {
        console.log(data);
        this.orders = data.orders;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
