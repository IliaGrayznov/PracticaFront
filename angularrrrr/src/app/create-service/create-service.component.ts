import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  form: any = {};
  types:any;
  content: string;
  isSuccessful = false;
  isFailed = false;
  errorMessage = '';

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getServicesType().subscribe(
      data => {
        this.types = data.types;
        console.log(data)
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

    
  onSubmit(): void{
    this.adminService.createService(this, this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    );
  }

}
