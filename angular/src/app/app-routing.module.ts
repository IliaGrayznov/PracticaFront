import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardClientComponent} from './board-client/board-client.component';
import {BoardManagerComponent} from './board-manager/board-manager.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'orders', component: BoardClientComponent },
  { path: 'manager', component: BoardManagerComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'productform', component: CreateProductComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
