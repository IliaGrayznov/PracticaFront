import {Component, OnInit} from '@angular/core';
import {ProductService} from '../_services/product.service';
import {OrderService} from '../_services/order.service';
import {TokenStorageService} from '../_services/token-storage.service';

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
  isLoggedIn = false;
  roles: any;
  showClient: boolean;

  constructor(private productService: ProductService,
              private tokenStorageService: TokenStorageService,
              private orderService: OrderService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showClient = this.roles.includes('ROLE_client');
    }
    this.productService.getProducts().subscribe(
      data => {
        this.products = data.products;
      },
      err => {
        console.log(err.error.message);
      }
    );
  }
  onClickBuy(id): void{
    this.orderService.addProductToCart(id).subscribe(
      data => {
        console.log(data.message);
      },
      err => {
        console.log(err.error.message);
      }
    );
    window.location.reload();
  }
}
