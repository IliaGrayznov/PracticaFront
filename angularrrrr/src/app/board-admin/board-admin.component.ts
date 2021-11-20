import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  services: any;

  form: any = {};

  serviceFORup:any;

  updating = false;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllServices().subscribe(
      data => {
        
        this.services = data.services;
        console.log(this.services);
      },
      err => {
        
      }
    );
  }

  onSubmit(id): void{
    this.adminService.deleteService(id).subscribe(
      data => {     
        console.log(data);
        location.reload();
      },
      err => {

      }
    );
  }

  showUpdate(service): void{
    this.updating=true;
    this.serviceFORup=service;
  }

  
  onUpdate(): void{
    this.adminService.updateService(this.form, this.serviceFORup.id).subscribe(
      data => {     
        console.log(data);
        this.updating = false;
        location.reload();
      },
      err => {

      }
    );
  }

}
