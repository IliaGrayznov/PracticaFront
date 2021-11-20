import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

}
