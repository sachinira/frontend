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

  {path:'error',component:ErrorComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent}



];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    ErrorComponent
   
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
