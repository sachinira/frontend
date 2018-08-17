import { Component, OnInit,ElementRef,HostListener,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {
 
  qid:string;
  results:any;


  //these fields must get from the service and instantiate
  interval:any;

  countNotification:number;
  countMessage:number;
  otherMsg:number;

  notifications:string[]=[];
  notificationDates:string[]=[];
  releventUsers:string[]=[];
  i:number;
  j:number;

  messages:string[]=[];
  messageDates:string[]=[];
  senders:string[]=[];

  constructor(private service:UserService,private router: Router) {
   
  }

  ngOnInit(){


    this.countNotification= this.service.countNotification
    this.countMessage = this.service.countMessage;
    this.otherMsg = this.service.otherMsg;

    this.notifications=this.service.notifications;
    this.notificationDates = this.service.notificationDates;
    this.releventUsers =this.service.releventUsers;

    this.i = this.service.i;
    this.j = this.service.j;

    this.messages = this.service.messages;
    this.messageDates = this.service.messageDates;
    this.senders = this.service.senders;

    this.interval = this.service.interval;

    if(localStorage.getItem('id')===null){
     
    }else{
      this.qid = localStorage.getItem("id");
      /*realtime update
      this.interval = setInterval(() => {
        this.service.realtime(this.qid).subscribe(
          data => {
              console.log(data);
              if(data['status']){
                this.results = data['list'];
                this.getNotifications();
              }
             
          });
       }, 5000);*/

       this.service.realtime(this.qid);
    }
  }


/*  getNotifications(){
   
    this.results.forEach((x:any)=>{
      if(x.type === "messages"){
        this.countMessage++;
        this.messages[this.i] = x.updatedStatus;
        this.messageDates[this.i] = x.notificationSendDate;
        this.senders[this.i] = x.affectedUserId;
        this.i++;
      }
      else{
        this.countNotification++;
        this.notifications[this.j] = x.updatedStatus;
        this.notificationDates[this.j] = x.notificationSendDate;
        this.releventUsers[this.j] = x.affectedUserId;
        this.j++;
      }
      
    })
  }*/

  clearNot(){
    this.service.j = 0;
    this.service.countNotification=0;

  }

  clearMsg(){
    this.service.j=0;
    this.service.countMessage =0 ;
  }

  logOut(){
   
    localStorage.clear();
    this.router.navigate(['']);
  }

  goProfile(){
    this.router.navigate(['/dashboard/dprofile']);
  }



 myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

gotoChat(){
  //need counceller's id / person who is sending
  //need msg

}



/*notific(){
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
 }*/

 


ngOnDestroy(){
  clearInterval(this.interval);
}


 

}
