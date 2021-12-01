import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardClientComponent} from './board-client/board-client.component';
import {BoardManagerComponent} from './board-manager/board-manager.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {CreateProductComponent} from './board-manager/products/create-product/create-product.component';
import {CartComponent} from './board-client/cart/cart.component';
import {OrdersComponent} from './board-manager/orders/orders.component';
import {ProductsComponent} from './board-manager/products/products.component';
import {ChangeProductComponent} from './board-manager/products/change-product/change-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: BoardClientComponent },
  { path: 'manager', component: BoardManagerComponent },
  { path: 'manager/orders', component: OrdersComponent },
  { path: 'manager/products', component: ProductsComponent },
  { path: 'manager/products/create', component: CreateProductComponent },
  { path: 'manager/products/change', component: ChangeProductComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
