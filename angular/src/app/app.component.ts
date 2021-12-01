import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './_services/token-storage.service';
import {OrderService} from './_services/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdmin = false;
  showManagerBoard = false;
  showClientBoard = false;
  username: string;
  amountCart: number;
  content: string;

  constructor(private tokenStorageService: TokenStorageService,
              private orderService: OrderService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdmin = this.roles.includes('ROLE_admin');
      this.showManagerBoard = this.roles.includes('ROLE_manager');
      this.showClientBoard = this.roles.includes('ROLE_client');
      this.username = user.username;
      this.orderService.showAmountCart().subscribe(
        data => {
          if (data.amount !== 0) {
            this.amountCart = data.amount;
          }
        },
        err => {
          this.content = JSON.parse(err.error).message;
        }
      );
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
