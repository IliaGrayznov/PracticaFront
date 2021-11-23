import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register-master',
  templateUrl: './register-master.component.html',
  styleUrls: ['./register-master.component.css']
})
export class RegisterMasterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { 
    
  }

  ngOnInit(): void {
  }
  onSubmit(): void{
    this.authService.registerMaster(this.form).subscribe(
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
