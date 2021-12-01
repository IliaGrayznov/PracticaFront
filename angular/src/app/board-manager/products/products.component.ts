import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../_services/product.service';
import {DataService} from '../../_services/data/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService,
              private readonly dataService: DataService,
              private router: Router) { }

  products: any;

  ngOnInit(): void {
    this.productService.getProductsManager().subscribe(
      data => {
        this.products = data.products;
      },
      err => {
        console.log(err);
      }
    );
  }

  public onClickChange(productId): void {
    this.router.navigate(['/manager/products/change']);
    this.dataService.idToChangeProduct(productId);
  }

}
