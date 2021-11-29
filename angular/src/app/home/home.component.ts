import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any;
  content: string;
  isSuccessful = false;
  isFailed = false;
  errorMessage = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data.products;
        console.log(data);
        console.log(this.products);
        console.log(data.products);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  /*onClickBuy(): void{
    this.productService.addProductToCart(this.form).subscribe(
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
  }*/
}
