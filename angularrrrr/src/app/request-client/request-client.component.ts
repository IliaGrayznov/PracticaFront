import { Component, OnInit } from '@angular/core';
import { RequestService } from '../_services/request.service';

@Component({
  selector: 'app-request-client',
  templateUrl: './request-client.component.html',
  styleUrls: ['./request-client.component.css']
})
export class RequestClientComponent implements OnInit {

  requests: any;

  content: string

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

}
