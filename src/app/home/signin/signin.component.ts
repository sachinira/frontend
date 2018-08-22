import { Component, OnInit } from '@angular/core';
import { AllUser } from '../all_user';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

 
  uname:string;
  pwd:string;
  signinerrorMsg:string;
  errpassword:string;

  user:AllUser = new AllUser();

  constructor(private homeService:HomeService,private router:Router) { }

  ngOnInit() {

    
    this.user.latitude = "5.34242552";
    this.user.longitude="80.5353522";


    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              //this.geolocationPosition = position,
              console.log(position.coords.latitude);
              this.user.latitude = JSON.stringify(position.coords.latitude);
              //this.user.gps = "34.434220";
              console.log(position.coords.longitude);
              this.user.longitude = JSON.stringify(position.coords.longitude);
          },
          error => {
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
      );
  };
  }


  onSignIn(){
    document.getElementById("load").style.display = "block";
    document.getElementById("showweb").style.display = "none";
   
      this.homeService.get_signin(this.uname,this.pwd).subscribe(
        (req)=>{
    
          //console.log("siginin");
          
          localStorage.setItem("id",req['id']);
          localStorage.setItem("name",req['name']);
          localStorage.setItem("longi",this.user.longitude);
          localStorage.setItem("lati",this.user.latitude);
         
          localStorage.setItem("tok",req['session_token']);
          localStorage.setItem("type",req['type']);
    
          
    
          //we must set the image file for the user


    
          if(req['type']== "user"){
            this.router.navigate(['/dashboard/dhome']);
          }
          if(req['type'] == "counceller"){
            this.router.navigate(['/dashboard/dchome']);
          }
          if(req['type'] == "admin"){
            this.router.navigate(['/admin']);
          }

          document.getElementById("load").style.display = "none";
          document.getElementById("showweb").style.display = "block";
        },
        (err)=>{
    
    
          console.log(err.error['response']);
          this.signinerrorMsg = err.error['response'];
          document.getElementById("load").style.display = "none";
          document.getElementById("showweb").style.display = "block";
    
        }
      );
      
   
   
  }
  
  

}
