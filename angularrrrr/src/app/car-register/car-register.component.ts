import { Component, OnInit } from '@angular/core';
import { CarService } from '../_services/car.service';

@Component({
  selector: 'app-car-register',
  templateUrl: './car-register.component.html',
  styleUrls: ['./car-register.component.css']
})
export class CarRegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isFailed = false;
  errorMessage = '';

  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.carService.register(this.form).subscribe(
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
