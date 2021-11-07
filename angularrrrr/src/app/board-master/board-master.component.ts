import { Component, OnInit } from '@angular/core';
import { RequestService } from '../_services/request.service';

@Component({
  selector: 'app-board-master',
  templateUrl: './board-master.component.html',
  styleUrls: ['./board-master.component.css']
})
export class BoardMasterComponent implements OnInit {

  requests: any;
  
  content: string;

  form: any = {};

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getRequestsForAssept().subscribe(
      data => {
        this.requests = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  onSubmit(): void{
    this.requestService.asseptRequest(this).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
