import { Component, OnInit,ElementRef,HostListener,OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ROUTES } from '../sidebar/sidebar.component';
import * as $ from 'jquery';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {
 
  interval:any;
  qid:string;
  results:any;

  countNotification:number=0;
  countMessage:number=0;
  otherMsg:number=0;

  notification:string;
  notificationDate:string;
  releventUser:string;

  constructor(private service:UserService,private router: Router) {
   
  }

  ngOnInit(){
    if(localStorage.getItem('id')===null){
     
    }else{
      this.qid = localStorage.getItem("id");
      //realtime update
      this.interval = setInterval(() => {
        this.service.realtime(this.qid).subscribe(
          data => {
              console.log(data);
              if(data['status']){
                this.results = data['list'];
                this.getNotifications();
              }
             
          });
       }, 5000);
    }
  }


  getNotifications(){
  
    this.results.forEach((x:any)=>{
      if(x.type === "notification"){
        this.countNotification++;
        this.notification = x.updatedStatus;
        this.notificationDate = x.notificationSendDate;
        this.releventUser = x.affectedUserId;
      }
      else if(x.type === "messages"){
        this.countMessage++;
        this.notification = x.updatedStatus;
        this.notificationDate = x.notificationSendDate;
        this.releventUser = x.affectedUserId;
      }


    })
  }

  logOut(){
   
    localStorage.clear();
    this.router.navigate(['']);
  }




 myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

notific(){
  $(document).ready(function()
  {
  $("#notificationLink").click(function()
  {
  $("#notificationContainer").fadeToggle(300);
  $("#notification_count").fadeOut("slow");
  return false;
  });
  
  //Document Click hiding the popup 
  $(document).click(function()
  {
  $("#notificationContainer").hide();
  });
  
  //Popup on click
  $("#notificationContainer").click(function()
  {
  return false;
  });
  
  });
 }

 message(){
  $(document).ready(function()
  {
  $("#notificationLinkm").click(function()
  {
  $("#notificationContainerm").fadeToggle(300);
  $("#notification_count").fadeOut("slow");
  return false;
  });
  
  //Document Click hiding the popup 
  $(document).click(function()
  {
  $("#notificationContainerm").hide();
  });
  
  //Popup on click
  $("#notificationContainerm").click(function()
  {
  return false;
  });
  
  });
 }


 dropdown(){
  $(document).ready(function()
  {
  $("#notificationLinku").click(function()
  {
  $("#notificationContaineru").fadeToggle(300);
  $("#notification_count").fadeOut("slow");
  return false;
  });
  
  //Document Click hiding the popup 
  $(document).click(function()
  {
  $("#notificationContaineru").hide();
  });
  
  //Popup on click
  $("#notificationContaineru").click(function()
  {
  return false;
  });
  
  });
 }

 


 ngOnDestroy(){
  clearInterval(this.interval);
}


 

}
