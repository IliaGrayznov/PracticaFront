import {Component, OnDestroy, OnInit} from '@angular/core';
import {TokenStorageService} from './_services/token-storage.service';
import {OrderService} from './_services/order.service';
import {DataService} from './_services/data/data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private roles: string[];
  isLoggedIn = false;
  isAdminUser = false;
  isManagerUser = false;
  isClientUser = false;
  username: string;
  amountCart: number;
  content: string;
  subscription: Subscription;

  constructor(private tokenStorageService: TokenStorageService,
              private orderService: OrderService,
              private dataService: DataService) { }

  ngOnInit(): void {
    /*this.subscription = this.dataService.update$.subscribe(x => {
      this.ngOnInit();
    });*/ // FIXME
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.isAdminUser = this.roles.includes('ROLE_admin');
      this.isManagerUser = this.roles.includes('ROLE_manager');
      this.isClientUser = this.roles.includes('ROLE_client');
      this.username = user.username;
      if (this.isClientUser) {
        this.orderService.showAmountCart().subscribe(
          data => {
            if (data.amount !== 0) {
              this.amountCart = data.amount;
            }
          },
          err => {
            console.log(err.error.message);
          }
        );
      }
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
