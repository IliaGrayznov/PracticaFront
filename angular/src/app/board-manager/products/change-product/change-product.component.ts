import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DataService} from '../../../_services/data/data.service';
import {ProductService} from '../../../_services/product.service';

@Component({
  selector: 'app-change-product',
  templateUrl: './change-product.component.html',
  styleUrls: ['./change-product.component.css']
})
export class ChangeProductComponent implements OnInit, OnDestroy {

  constructor(private dataService: DataService, private productService: ProductService) { }

  categories: any;
  form: any = {};
  isSuccessful = false;
  isFailed = false;
  private subscription: Subscription;
  idFromProducts: number;

  ngOnInit(): void {
    this.subscription = this.dataService.idToChangeProduct$.subscribe(x => {
      console.log(x);
      this.idFromProducts = x;
    });
    this.productService.getCategories().subscribe(
      data => {
        this.categories = data.categories;
      },
      err => {
        console.log(err);
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSubmit(): void{
    this.form.id = this.idFromProducts;
    this.productService.changeProduct(this.form, this).subscribe(
      data => {
        console.log(data.message.message);
        this.isSuccessful = true;
        this.isFailed = false;
      },
      err => {
        console.log(err.error.message);
        this.isFailed = true;
      }
    );
  }

}
