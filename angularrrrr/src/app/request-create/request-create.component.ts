import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { CarService } from '../_services/car.service';
import { RequestService } from '../_services/request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  
  services:any;

  cars: any;

  content: string;

  form: any = {};
  isSuccessful = false;
  isFailed = false;
  errorMessage = '';

  constructor(private userService: UserService, private carService: CarService, private requestService: RequestService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.services = data.services;
        console.log(data)
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

    this.carService.getUserCars().subscribe(
      data => {
        this.cars = data.cars;
        console.log(data)
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  
  onSubmit(): void{
    this.requestService.create(this, this.form).subscribe(
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
