import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {BoardManagerComponent} from './board-manager/board-manager.component';
import {BoardClientComponent} from './board-client/board-client.component';

import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {CreateProductComponent} from './board-manager/products/create-product/create-product.component';
import {CartComponent} from './board-client/cart/cart.component';
import {OrdersComponent} from './board-manager/orders/orders.component';
import {ProductsComponent} from './board-manager/products/products.component';
import {ChangeProductComponent} from './board-manager/products/change-product/change-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardManagerComponent,
    BoardClientComponent,
    CreateProductComponent,
    CartComponent,
    OrdersComponent,
    ProductsComponent,
    ChangeProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
