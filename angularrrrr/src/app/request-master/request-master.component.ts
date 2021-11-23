import { Component, OnInit } from '@angular/core';
import { RequestService } from '../_services/request.service';

@Component({
  selector: 'app-request-master',
  templateUrl: './request-master.component.html',
  styleUrls: ['./request-master.component.css']
})
export class RequestMasterComponent implements OnInit {
 
  requests: any;

  services: any;

  content: string;

  isServicing = false;

  id_cur_request: number;

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

  
  onSubmit(id): void{
    this.requestService.startServiceRequest(id).subscribe(
      data => {     
        console.log(data);
        this.isServicing=true;
        this.services=data.services;
        this.id_cur_request = id;
      },
      err => {

      }
    );
  }

  onFinish(): void{
    this.requestService.finishServiceRequest(this.id_cur_request).subscribe(
      data => {     
        console.log(data);
        this.isServicing=false;
        location.reload();
      },
      err => {

      }
    );
  }

  onFinishID(id): void{
    this.requestService.finishServiceRequest(id).subscribe(
      data => {     
        console.log(data);
        location.reload();
      },
      err => {

      }
    );
  }


}
