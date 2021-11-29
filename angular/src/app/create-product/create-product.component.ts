import { Component, OnInit } from '@angular/core';
import {ProductService} from '../_services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  form: any = {};
  isSuccessful = false;
  isFailed = false;
  errorMessage = '';

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.productService.createProduct(this.form).subscribe(
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
