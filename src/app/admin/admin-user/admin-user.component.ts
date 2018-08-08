import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  disableUser:any;
  enableUser:any;
  usernames:any;
  admin_id:any;
  controller_id:any;
  status:string;
  aidbtn:any;

  disable:boolean=true;

  constructor(private adminServices:AdminService,private router:Router) { }

  ngOnInit() {

    this.adminServices.getUserDetail('user').subscribe(
      data=>{
       
        this.disableUser=data['disablePationts'];
        this.enableUser=data['enablePationts'];
        console.log(data);
        
      }
    )
  }

  accessControldisable(uid:any,sta:string){
    var t = confirm("Do you really want to Disable?");     
    if(t == true)  
    {  
      this.admin_id=localStorage.getItem("id")
      this.adminServices.accessControl(this.admin_id,uid,"disable").subscribe(
          data=>{
  
              if(data['status']="success"){
                document.getElementById(uid+"bt").style.display = "none";
                document.getElementById(uid).style.display = "block";
                
  
              }
  
              console.log(data);
          }
      );
    }  
    else  
    {  
         
    }  
  
    
  }

  accessControlenable(uid:any,sta:string){
    var t = confirm("Do you really want to enable?");     
    if(t == true)  
    {  
      this.admin_id=localStorage.getItem("id")
      this.adminServices.accessControl(this.admin_id,uid,"enable").subscribe(
          data=>{
  
              if(data['status']="success"){
                document.getElementById(uid+"bt").style.display = "none";
                document.getElementById(uid).style.display = "block";
            
              }
  
              console.log(data);
          }
      );
    }  
    else  
    {  
       
    }  
   
  }

  View(uid:any){
    localStorage.setItem("userid",uid);

    this.router.navigate(['/admin/auserprof']);
  }

  delete(uid:any,sta:string){
    var t = confirm("Do you really want to Delete?");     
    if(t == true)  
    {  
      this.admin_id=localStorage.getItem("id")
      this.adminServices.accessControl(this.admin_id,uid,"delete").subscribe(
          data=>{
  
              if(data['status']="success"){
                document.getElementById(uid+"dltbtn").style.display = "none";
                document.getElementById(uid+"dlt").style.display = "block";
              }
  
              console.log(data);
          }
      );
    }  
    else  
    {  
       
    }  
   
  }
  

}
