import { Component, OnInit } from '@angular/core';
import { RequestService } from '../_services/request.service';

@Component({
  selector: 'app-request-client',
  templateUrl: './request-client.component.html',
  styleUrls: ['./request-client.component.css']
})
export class RequestClientComponent implements OnInit {

  requests: any;

  price: 0;

  content: string

  showPay = false;

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getUserRequests().subscribe(
    data => {
      this.requests = data.requests;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    }
  );
  }

  onSubmit(request): void{
    this.requestService.payService(request.id).subscribe(
      data => {     
        request.services.forEach(element => {
          this.price+=element.price;
        });
        console.log(data);
        this.showPay=true;
      },
      err => {

      }
    );
  }

}
