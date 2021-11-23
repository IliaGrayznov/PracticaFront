import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardClientComponent } from './board-client/board-client.component';
import { BoardMasterComponent } from './board-master/board-master.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { RegisterMasterComponent } from './register-master/register-master.component';
import { CarRegisterComponent } from './car-register/car-register.component';
import { RequestClientComponent } from './request-client/request-client.component';
import { RequestMasterComponent } from './request-master/request-master.component';
import { RequestCreateComponent } from './request-create/request-create.component';
import { CreateServiceComponent } from './create-service/create-service.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'registerMaster', component: RegisterMasterComponent },
  { path: 'registerCar', component: CarRegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'client', component: BoardClientComponent },
  { path: 'requests', component: RequestClientComponent },
  { path: 'masterRequests', component: RequestMasterComponent },
  { path: 'master', component: BoardMasterComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'createRequest', component: RequestCreateComponent },
  { path: 'createService', component: CreateServiceComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
