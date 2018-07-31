import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from '../services/admin.service';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,OnDestroy {

  interval:any;
  id:string;
  notice="Notice to all users";
  type="user";//this is the type on which the admin should show the notification to

  notice_id="1";
  status="delete";

  results:any;
  notification:any;


  countNotification=0;
  councellerid:any;

 



  //this refers to the access control
  controlid="3";//this is an id which is a newly registered users or councellers
  astatus="enable";//this object is sent with the click of status button

  msgstatus:string;
  msgerrormsg:string;
  msgcontrolstatus:string;
  msgcontrolerrormsg:string;
  qid:string;

  constructor(private adminService:AdminService,private router:Router,private http:HttpClient) { }

  ngOnInit() {
   this.qid=localStorage.getItem("id");
    console.log(this.qid);

     /*this.adminService.getData(this.qid).subscribe(
        (res)=>{
          console.log(res);
          
        },
        (err)=>{
          console.log(err);
          this.router.navigate(['']);
          
        }
     );

     this.id = localStorage.getItem("id");
*/
     //realtime update
     this.qid = localStorage.getItem("id");
      //realtime update
      this.interval = setInterval(() => {
        this.adminService.realtime(this.qid).subscribe(
          data => {
              console.log(data);
              if(data['status']){
                this.results = data['list'];
              
                this.getNotifications();
              }

             
          });
       }, 5000);


  }

  getNotifications(){
  
    this.results.forEach((x:any)=>{
      if(x.type === "notification"){

        this.countNotification++;
        
        this.notification = x.updatedStatus;
        //this.notificationDate = x.notificationSendDate;
        //this.releventUser = x.affectedUserId;
          this.councellerid=x.id;

      }
      else if(x.type === "messages"){
       
        //this.notification = x.updatedStatus;
        //this.notificationDate = x.notificationSendDate;
        //this.releventUser = x.affectedUserId;
      }


    })
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }
  
  

 
  

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }
  
 

  myFunction1() {
    
    if(document.getElementById("mySidenav").style.width == "250px"){
        
        document.getElementById("mySidenav").style.width = "0";
      
         
    }else{
        document.getElementById("mySidenav").style.width = "250px";    
      
        
    }
  }

  myFunction2() {
    
   
    document.getElementById("mySidenav").style.display = "block";    
      
   
    if(document.getElementById("mySidenav").style.width == "250px"){
        
      document.getElementById("mySidenav").style.width = "0";
    
       
  }else{
      document.getElementById("mySidenav").style.width = "250px";    
    
      
  }
        
    
}

newcounceller(){



  if(this.countNotification==2){
        alert("Not any Notifications");

  }else{
    this.countNotification=0

    localStorage.setItem("cid",this.councellerid);

    document.getElementById('id01').style.display='block';


    var modal = document.getElementById('id01');
   
     // When the user clicks anywhere outside of the modal, close it
     window.onclick = function(event) {
         if (event.target == modal) {
             modal.style.display = "none";
         }
     }

     
     this.controlid = localStorage.getItem("cid");
    console.log(this.controlid);

    this.adminService.getData('116').subscribe(
      (res)=>{
        console.log(res);
        
      },
      (err)=>{
        console.log(err);
        this.router.navigate(['']);
        
      }
   );

    
    
  }
 
 
}




}
