import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardMasterComponent } from './board-master/board-master.component';
import { BoardClientComponent } from './board-client/board-client.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { RegisterMasterComponent } from './register-master/register-master.component';
import { CarRegisterComponent } from './car-register/car-register.component';
import { RequestClientComponent } from './request-client/request-client.component';
import { RequestCreateComponent } from './request-create/request-create.component';
import { RequestMasterComponent } from './request-master/request-master.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardMasterComponent,
    BoardClientComponent,
    RegisterMasterComponent,
    CarRegisterComponent,
    RequestClientComponent,
    RequestCreateComponent,
    RequestMasterComponent
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
