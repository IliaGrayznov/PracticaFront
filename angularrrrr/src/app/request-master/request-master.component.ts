import { Component, OnInit } from '@angular/core';
import { RequestService } from '../_services/request.service';

@Component({
  selector: 'app-request-master',
  templateUrl: './request-master.component.html',
  styleUrls: ['./request-master.component.css']
})
export class RequestMasterComponent implements OnInit {
 
  requests: any;

  content: string

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getMasterRequests().subscribe(
      data => {
        this.requests = data.requests;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
