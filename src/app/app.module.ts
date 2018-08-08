import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeService } from './services/home.service';
import { UserService } from './services/user.service';
import { CouncellerService } from './services/counceller.service';
import { AdminService } from './services/admin.service';


import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';

import { AdminComponent } from './admin/admin.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminCouncellComponent } from './admin/admin-councell/admin-councell.component';
import { AdminCouncellProfComponent } from './admin/admin-councell-prof/admin-councell-prof.component';
import { AdminUserProfComponent } from './admin/admin-user-prof/admin-user-prof.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminGuard } from './authguard/admin.guard';


const appRoutes:Routes = [

  {path: '',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {
    path: 'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'',
        loadChildren:'./dashboard/dashboard.module#DashboardModule'
      }
    ]
  },

  {path:'admin',component:AdminComponent,canActivate:[AdminGuard],

      children:[
        {path:'',component:AdminHomeComponent},
        {path:'ahome',component: AdminHomeComponent},
        {path:'acouncellerprof',component: AdminCouncellProfComponent},
        {path:'acounceller',component: AdminCouncellComponent},
        {path:'auser',component: AdminUserComponent},
        {path:'auserprof',component: AdminUserProfComponent}
      ]


  },

  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',component:ErrorComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    ErrorComponent,
    AdminComponent,
    AdminCouncellComponent,
    AdminCouncellProfComponent,
    AdminHomeComponent,
    AdminProfileComponent,
    AdminUserComponent,
    AdminUserProfComponent,
  
   
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    
  ],
  providers: [HomeService,UserService,CouncellerService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
