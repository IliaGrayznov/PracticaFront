import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { CarService } from '../_services/car.service';

@Component({
  selector: 'app-board-client',
  templateUrl: './board-client.component.html',
  styleUrls: ['./board-client.component.css']
})
export class BoardClientComponent implements OnInit {

  cars: any;

  content: string

  constructor(private userService: UserService, private carService: CarService, ) { }

  ngOnInit(): void {
    this.carService.getUserCars().subscribe(
      data => {
        this.cars = data.cars;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}